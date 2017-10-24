/*
* @Date:   2017-10-24 10:12:33
* @Last Modified time: 2017-10-24 10:12:36
*/
'use strict';
/*
installed by babel-core's dependencies
 */
import debug from "debug";


let pageError = debug("core:page"),
    relayError = debug("core:relay"),
    spiderError = debug("core:spider"),
    pipelineError = debug("core:pipeline");

let correctUrlError = debug("utils:correctUrl");


let scriptsInfo = debug("info");


export {
    pageError,
    relayError,
    spiderError,
    pipelineError,

    correctUrlError,

    scriptsInfo
}