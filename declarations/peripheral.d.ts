/** @noSelfInFile */
declare namespace peripheral {
    function getNames(): string[]
    function isPresent(name: string): boolean
    function getType(peripheral: string | any): string[] | null
    function hasType(peripheral: string | any, peripheral_type: string): boolean | null
    function getMethods(name: string): string[] | null
    function getName(peripheral: any): string
    function call(name: string, method: string, ...args: unknown[]): any
    function wrap(name: string): any | null
    function find(ty: string, filter?: (name: string, wrapped: any) => boolean): any[]
}