// import { ThemeCustomizer } from "@/components/themes/theme-customizer";
// import { ThemeWrapper } from "@/components/themes/theme-wrapper";
import { createFileRoute } from "@tanstack/react-router";
// import { CardsTeamMembers } from "@/components/themes/team-members";
export const Route = createFileRoute("/theme")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		// <ThemeWrapper>
		// 	<ThemeCustomizer />
		// 	<div className="flex flex-col py-10">
		// 		<CardsTeamMembers />
		// 	</div>
		// </ThemeWrapper>
		<div>
			<h1>Theme</h1>
		</div>
	);
}
