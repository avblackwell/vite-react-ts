import React, { useEffect, useRef, useState } from 'react';

import invariant from 'tiny-invariant';

// import { durations, easeInOut } from '@atlaskit/motion';
import {
	draggable,
	dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

function Item({
	itemId,
	children,
}: {
	itemId: string;
	children?: React.ReactElement | React.ReactElement[];
}) {
	const [isDraggingAllowed, setIsDraggingAllowed] = useState<boolean>(true);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const ref = useRef<HTMLLabelElement | null>(null);

	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return draggable({
			element,
			canDrag: () => isDraggingAllowed,
			getInitialData: () => ({ itemId }),
			onDragStart: () => setIsDragging(true),
			onDrop: () => setIsDragging(false),
		});
	}, [itemId, isDraggingAllowed]);

	return (
		<div className={`p-2 border border-dashed ${
			isDraggingAllowed ? 'bg-green-50' : 'bg-red-50'
		} space-y-1`}>
			<label
				ref={ref}
				className={`flex flex-row items-center justify-between p-2 select-none border border-solid ${
					isDragging ? 'opacity-40' : ''
				}`}
			>
				<div className="flex items-center gap-1">
					<input
						onChange={() => setIsDraggingAllowed((value) => !value)}
						type="checkbox"
						checked={isDraggingAllowed}
					/>
					Dragging allowed?
				</div>
				<small className="m-0">
					(id: {itemId})
				</small>
			</label>
			{children ? <div className="space-y-1">{children}</div> : null}
		</div>
	);
}

function DropTarget() {
	const [state, setState] = useState<'idle' | 'is-over'>('idle');
	const ref = useRef<HTMLDivElement | null>(null);
	const [lastDropped, setLastDropped] = useState<string | null>(null);

	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return dropTargetForElements({
			element,
			onDragStart: () => setState('idle'),
			onDragEnter: () => setState('is-over'),
			onDragLeave: () => setState('idle'),
			onDrop: ({ source }) => {
				setState('idle');

				if (typeof source.data.itemId !== 'string') {
					return;
				}
				setLastDropped(source.data.itemId);
			},
		});
	}, []);

	return (
		<div
			className={`flex items-center justify-center border border-solid transition-colors duration-300 ${
				state === 'is-over' 
					? 'border-blue-400 bg-blue-50' 
					: 'border-purple-400 bg-purple-50'
			}`}
			ref={ref}
		>
			<div className="text-center">
				<strong>Drop on me!</strong>
				<em className="block">
					Last dropped: <code>{lastDropped ?? 'none'}</code>
				</em>
			</div>
		</div>
	);
}

export default function Example() {
	return (
		<div className="grid grid-cols-2 gap-2">
			<Item itemId="1">
				<Item itemId="1-1">
					<Item itemId="1-1-1" />
					<Item itemId="1-1-2" />
				</Item>
				<Item itemId="1-2">
					<Item itemId="1-2-1" />
					<Item itemId="1-2-2" />
				</Item>
			</Item>
			<DropTarget />
		</div>
	);
}