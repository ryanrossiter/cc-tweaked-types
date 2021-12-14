/** @noSelfInFile */
declare namespace peripheral {
    function getNames(): string[]
    function isPresent(name: string): boolean
    function getType(peripheral: string | any): string[] | null
    function hasType(peripheral: string | any, peripheral_type: string): boolean | null
    function getMethods(name: string): string[] | null
    function getName(peripheral: any): string
    function call(name: string, method: string, ...args: unknown[]): any
    function wrap<T = WrappedPeripheral>(name: string): T | null
    function find<T = WrappedPeripheral>(ty: string, filter?: (name: string, wrapped: any) => boolean): T

    type WrappedPeripheral = Monitor;

    export interface Monitor {
        setTextScale(scale :number): void
        getTextScale(): number
        write(text: string): void
        scroll(y: number): void
        getCursorPos(): LuaMultiReturn<[x: number, y: number]>
        setCursorPos(x: number, y: number): void
        getCursorBlink(): boolean
        setCursorBlink(blink: boolean): void
        getSize(): LuaMultiReturn<[width: number, height: number]>
        clear(): void
        clearLine(): void
        getTextColor(): number
        getTextColour(): number
        setTextColor(color: number): void
        setTextColour(colour: number): void
        getBackgroundColor(): number
        getBackgroundColour(): number
        setBackgroundColor(color: number): void
        setBackgroundColour(colour: number): void
        isColor(): boolean
        isColour(): boolean
        blit(text: string, textColor: string, backgroundColor: string): void
        setPaletteColor(index: number, color: number): void
        setPaletteColor(index: number, r: number, g: number, b: number): void
        setPaletteColour(index: number, color: number): void
        setPaletteColour(index: number, r: number, g: number, b: number): void
        getPaletteColor(color: number): LuaMultiReturn<[r: number, g: number, b: number]>
        getPaletteColour(colour: number): LuaMultiReturn<[r: number, g: number, b: number]>
    }
}