"use client";

import { Button as CoreButton, type Props as CoreButtonProps } from "@packages/web-ui/components/ui/button";
import { Loader2Icon } from "lucide-react";

type Props = CoreButtonProps & {
	loading?: boolean;
	icon?: React.ReactNode;
};

const handleClick = async () => {
	alert("Button clicked!");
};

export function Button({ loading, icon, children, ...restProps }: Props) {
	return (
		<CoreButton disabled={loading} {...restProps} onClick={handleClick}>
			{loading && <Loader2Icon className="animate-spin" />}
			{!loading && icon}
			{children}
		</CoreButton>
	);
}
