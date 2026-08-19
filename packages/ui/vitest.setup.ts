import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

// jsdom doesn't implement these browser APIs. Several Radix primitives
// (Select, DropdownMenu, Tooltip, Popover, ...) rely on them for
// positioning/pointer capture, so every component test needs them.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// biome-ignore lint/suspicious/noExplicitAny: minimal jsdom polyfill
(globalThis as any).ResizeObserver ??= ResizeObserverStub;
window.HTMLElement.prototype.scrollIntoView ??= () => {};
window.HTMLElement.prototype.hasPointerCapture ??= () => false;
window.HTMLElement.prototype.releasePointerCapture ??= () => {};
