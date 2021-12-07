/** @noSelfInFile */
declare namespace gps {
    const CHANNEL_GPS: number;
    function locate(timeout?: number, debug?: boolean): LuaMultiReturn<[x: number, y: number, z: number] | [null]>;
}