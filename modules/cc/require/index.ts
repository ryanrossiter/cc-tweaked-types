declare module "cc/require" {
    /** @tupleReturn */
    function make(this: void, env: any, dir: string): [(this: void, module: string) => any];
}