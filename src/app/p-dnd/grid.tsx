import {
	createContext,
	memo,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import invariant from "tiny-invariant";

import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
	draggable,
	dropTargetForElements,
	monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

import battery from "../assets/battery.png";
import drill from "../assets/drill.png";
import koala from "../assets/koala.png";
import ui from "../assets/ui.png";
import wallet from "../assets/wallet.png";
import yeti from "../assets/yeti.png";

function getInstanceId() {
	return Symbol("instance-id");
}

const InstanceIdContext = createContext<symbol | null>(null);

type State = "idle" | "dragging" | "over";

const getItemStateClasses = (state: State): string => {
	const baseClasses =
		"w-full object-cover box-border bg-white p-1 rounded transition-all duration-200 ease-in-out";

	switch (state) {
		case "idle":
			return `${baseClasses} hover:bg-gray-50 hover:shadow-md`;
		case "dragging":
			return `${baseClasses} grayscale-80`;
		case "over":
			return `${baseClasses} scale-110 rotate-8 brightness-110 shadow-lg`;
		default:
			return baseClasses;
	}
};

const Item = memo(function Item({ src }: { src: string }) {
	const ref = useRef<HTMLImageElement | null>(null);
	const [state, setState] = useState<State>("idle");
	const instanceId = useContext(InstanceIdContext);

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return combine(
			draggable({
				element: el,
				getInitialData: () => ({ type: "grid-item", src, instanceId }),
				onDragStart: () => setState("dragging"),
				onDrop: () => setState("idle"),
			}),
			dropTargetForElements({
				element: el,
				getData: () => ({ src }),
				getIsSticky: () => true,
				canDrop: ({ source }) =>
					source.data.instanceId === instanceId &&
					source.data.type === "grid-item" &&
					source.data.src !== src,
				onDragEnter: () => setState("over"),
				onDragLeave: () => setState("idle"),
				onDrop: () => setState("idle"),
			}),
		);
	}, [instanceId, src]);

	return (
		<img
			className={getItemStateClasses(state)}
			ref={ref}
			src={src}
			alt="Draggable item"
		/>
	);
});

export default function Grid() {
	const [items, setItems] = useState<string[]>(() => [
		battery,
		drill,
		koala,
		ui,
		wallet,
		yeti,
	]);
	const [instanceId] = useState(getInstanceId);

	useEffect(() => {
		return monitorForElements({
			canMonitor({ source }) {
				return source.data.instanceId === instanceId;
			},
			onDrop({ source, location }) {
				const destination = location.current.dropTargets[0];
				if (!destination) {
					return;
				}
				const destinationSrc = destination.data.src;
				const startSrc = source.data.src;

				if (typeof destinationSrc !== "string") {
					return;
				}

				if (typeof startSrc !== "string") {
					return;
				}

				// swapping item positions
				const updated = [...items];
				updated[items.indexOf(startSrc)] = destinationSrc;
				updated[items.indexOf(destinationSrc)] = startSrc;

				setItems(updated);
			},
		});
	}, [instanceId, items]);

	return (
		<InstanceIdContext.Provider value={instanceId}>
			<div className="grid grid-cols-3 gap-[var(--grid)]">
				{items.map((src) => (
					<Item src={src} key={src} />
				))}
			</div>
		</InstanceIdContext.Provider>
	);
}
