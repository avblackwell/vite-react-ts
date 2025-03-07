import { Main } from "@/components/menubar/main";
import { MenuTheme } from "@/components/menubar/theme";
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Preferences } from "./dialog/preferences";

export function Menu() {
	return (
		<header
			className="flex sticky top-0 z-50 w-full items-center border-b bg-background"
			style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
		>
			<div className="flex h-(--header-height) w-full items-center">
				<Menubar
					className="rounded-none border-b border-none px-2"
					style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
				>
					<Main />
					<MenubarMenu>
						<MenubarTrigger className="relative">File</MenubarTrigger>
						<MenubarContent>
							<MenubarSub>
								<MenubarSubTrigger>New</MenubarSubTrigger>
								<MenubarSubContent className="w-[230px]">
									<MenubarItem>
										Playlist <MenubarShortcut>⌘N</MenubarShortcut>
									</MenubarItem>
									<MenubarItem disabled>
										Playlist from Selection{" "}
										<MenubarShortcut>⇧⌘N</MenubarShortcut>
									</MenubarItem>
									<MenubarItem>
										Smart Playlist... <MenubarShortcut>⌥⌘N</MenubarShortcut>
									</MenubarItem>
									<MenubarItem>Playlist Folder</MenubarItem>
									<MenubarItem disabled>Genius Playlist</MenubarItem>
								</MenubarSubContent>
							</MenubarSub>
							<MenubarItem>
								Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Close Window <MenubarShortcut>⌘W</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarSub>
								<MenubarSubTrigger>Library</MenubarSubTrigger>
								<MenubarSubContent>
									<MenubarItem>Update Cloud Library</MenubarItem>
									<MenubarItem>Update Genius</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>Organize Library...</MenubarItem>
									<MenubarItem>Export Library...</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>Import Playlist...</MenubarItem>
									<MenubarItem disabled>Export Playlist...</MenubarItem>
									<MenubarItem>Show Duplicate Items</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>Get Album Artwork</MenubarItem>
									<MenubarItem disabled>Get Track Names</MenubarItem>
								</MenubarSubContent>
							</MenubarSub>
							<MenubarItem>
								Import... <MenubarShortcut>⌘O</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>Burn Playlist to Disc...</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Show in Finder <MenubarShortcut>⇧⌘R</MenubarShortcut>{" "}
							</MenubarItem>
							<MenubarItem>Convert</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Page Setup...</MenubarItem>
							<MenubarItem disabled>
								Print... <MenubarShortcut>⌘P</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Edit</MenubarTrigger>
						<MenubarContent>
							<MenubarItem disabled>
								Undo <MenubarShortcut>⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem disabled>
								Cut <MenubarShortcut>⌘X</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								Copy <MenubarShortcut>⌘C</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								Paste <MenubarShortcut>⌘V</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Select All <MenubarShortcut>⌘A</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>
								Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>
								Smart Dictation...{" "}
								<MenubarShortcut>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										role="img"
										aria-label="Smart Dictation"
									>
										<title>Smart Dictation</title>
										<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
										<circle cx="17" cy="7" r="5" />
									</svg>
								</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Emoji & Symbols{" "}
								<MenubarShortcut>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										role="img"
										aria-label="Emoji & Symbols"
									>
										<title>Emoji & Symbols</title>
										<circle cx="12" cy="12" r="10" />
										<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
									</svg>
								</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>View</MenubarTrigger>
						<MenubarContent>
							<MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
							<MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarItem inset disabled>
								Show Status Bar
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Hide Sidebar</MenubarItem>
							<MenubarItem disabled inset>
								Enter Full Screen
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenuTheme />
				</Menubar>
			</div>
			<Preferences />
		</header>
	);
}
