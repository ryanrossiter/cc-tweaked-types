/** @noSelfInFile */
declare namespace redstone {
    function getSides(): string[]
    function setOutput(side: string, on: boolean): void
    function getOutput(side: string): boolean
    function getInput(side: string): boolean
    function setAnalogOutput(side: string, value: number): void
    function setAnalogueOutput(side: string, value: number): void
    function getAnalogOutput(side: string): number
    function getAnalogueOutput(side: string): number
    function getAnalogInput(side: string): number
    function setBundledOutput(side: string, output: number): void
    function getBundledOutput(side: string): number
    function testBundledInput(side: string, mask: number): boolean
}