import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
} from "@fernandes-vinicius/jveiga-icons";
import type * as React from "react";
import { Toaster as Sonner, type ToasterProps, toast } from "sonner";

/**
 * Wrapper de sonner com os tokens do DS. `theme` não é detectado
 * automaticamente (o pacote não depende de next-themes nem de nenhum
 * framework específico) — apps que já resolvem tema (ex. via
 * next-themes) devem passar `theme={resolvedTheme}` explicitamente.
 */
function Toaster({ theme = "light", ...props }: ToasterProps) {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CheckCircle2Icon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <AlertTriangleIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius-md)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster, toast };
