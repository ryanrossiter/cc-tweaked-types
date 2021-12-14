/** @noSelfInFile */
declare namespace paintutils {
    type ImageData = { __TYPE__: 'ImageData' };

    function parseImage(image: string): ImageData
    function loadImage(path: string): ImageData | null
    function drawPixel(xPos: number, yPos: number, color?: number): void
    function drawLine(startX: number, startY: number, endX: number, endY: number, color?: number): void
    function drawBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
    function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
    function drawImage(image: ImageData, xPos: number, yPos: number): void
}
