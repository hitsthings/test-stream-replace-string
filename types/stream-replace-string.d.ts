
declare module "stream-replace-string" {
    import { Transform, Readable } from 'node:stream';

    interface Options {
        limit?: number;
        bufferReplaceStream?: boolean;
    }

    type ReplaceStr = string | Promise<string>;
    type ReplacerFunc = (matches?: number) => ReplaceStr;

    function replace(searchStr: string, replaceWith: ReplaceStr | ReplacerFunc | Readable, options?: Options): Transform;

    export default replace;
}