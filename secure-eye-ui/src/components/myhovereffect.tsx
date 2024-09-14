import { HoverEffect } from "../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-7xl mx-auto px-8 h-full">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    {
        title: "Camera Registration",
        description: "Register your private cameras easily. Over 80% of cases resolved faster with registered cameras.",
    },
    {
        title: "Police Access",
        description: "Empower law enforcement with swift access to video footage. 60% of cases pending due to lack of evidence could be reduced.",
    },
    {
        title: "Camera Details",
        description: "Access detailed camera specifications, including location and ID. Accurate data helps in solving up to 40% more cases.",
    },
    {
        title: "License Verification",
        description: "Ensure all cameras are licensed and authorized. Licensed cameras contribute to a 50% reduction in unauthorized footage usage.",
    },
    {
        title: "Subsidy Opportunity",
        description: "Get up to 50% subsidy on the camera cost when you add a verified camera. Save on costs while improving safety.",
    },
    {
        title: "Enhanced Security",
        description: "Help increase public safety. Registered cameras have been linked to a 30% improvement in crime resolution rates.",
    },
];
