declare module "cc/require" {
    function make(this: void, env: any, dir: string): LuaMultiReturn<[(this: void, module: string) => any]>;
}