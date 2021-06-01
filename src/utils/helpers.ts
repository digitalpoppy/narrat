import { RenderingState } from "@vue/runtime-core";

export function aspectRatioFit(screenWidth: number, screenHeight: number, gameWidth: number, gameHeight: number) {
  const widthRatio = screenWidth / gameWidth;
  const heightRatio = screenHeight / gameHeight;
  const bestRatio = Math.min(widthRatio, heightRatio);
  return bestRatio;
}

export function screenToCanvas(x: number, y: number, state: RenderingState) {
  const canvasX = x - state.leftOffset;
  const canvasY = y - state.topOffset;
  const scaledX = canvasX / state.renderRatio;
  const scaledY = canvasY / state.renderRatio;
  return {
    x: scaledX,
    y: scaledY,
  };
}

export function aabb(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number) {
  return !(
    ax + aw < bx ||
    ay + ah < by ||
    ax > bx + bw ||
    ay > by + bh
  );
}
