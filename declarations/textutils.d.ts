/** @noSelfInFile */
declare namespace textutils {

    /**
     * Returns a JSON representation of the given data.
     *
     * This function attempts to guess whether a table is a JSON array or object.
     * However, empty tables are assumed to be empty objects - use textutils.empty_json_array to mark an empty array.
     *
     * This is largely intended for interacting with various functions from the commands API, though may also be used in making http requests.
     * ______________________________________________________________________________________________________________
     * @param t The value to serialise. Like textutils.serialise, this should not contain recursive tables or functions.
     * @param bNBTStyle? boolean Whether to produce NBT-style JSON (non-quoted keys) instead of standard JSON.
     * @return string The JSON representation of the input.
     * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
     */
    function serializeJSON(t: any, bNBTStyle?: boolean): string;

    /**
     * Converts a serialised JSON string back into a reassembled Lua object.
     *
     * This may be used with textutils.serializeJSON, or when communicating with command blocks or web APIs.
     * ______________________________________________________________________________________________________________
     * @param s string The serialised string to deserialise.
     * @param options? { nbt_style? = boolean, parse_null? = boolean }
     *      Options which control how this JSON object is parsed.
     *          nbt_style: When true, this will accept stringified NBT strings, as produced by many commands.
     *          parse_null: When true, null will be parsed as json_null, rather than nil.
     * @return The deserialised object
     * or
     * @tupleReturn
     * @return[1] nil If the object could not be deserialised.
     * @return[2] string A message describing why the JSON string is invalid.
     */
    function unserializeJSON(s: string, options?: {nbt_style?: boolean, parse_null?: boolean}): [any] | [null, string];

    function slowWrite(sText: string, nRate?: number): void;
    function slowPrint(sText: string, nRate?: number): void;
    function formatTime(nTime: number, bTwentyFourHour?: boolean): string;
    function pagedPrint(_sText: string, _nFreeLines?: number): number;
    function tabulate(...colorOrTable: (number | string[])[]): void;
    function pagedTabulate(...colorOrTable: (number | string[])[]): void;

    const empty_json_array: [];
    const json_null: null;

    function serialize(t: any, opts?: { compact?: boolean, allow_repetitions?: boolean }): string;
    function unserialize(s: string): any;
    function urlEncode(str: string): string;
    function complete(sSearchText: string, tSearchTable: any): string[];
}

