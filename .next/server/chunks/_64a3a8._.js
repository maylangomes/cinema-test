module.exports = {

"[project]/public/movies.json (json)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/public/movies.json (json)\n\nCaused by:\n- JSON file not found: [project]/public/movies.json (json)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/public/movies.json (json)\n- Execution of EcmascriptChunkItemContent::module_factory failed\n- Execution of <JsonChunkItem as EcmascriptChunkItem>::content failed\n- JSON file not found: [project]/public/movies.json (json)");

}}),
"[project]/src/app/api/movies/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../../public/movies.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function GET(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(movies);
}

})()),

};

//# sourceMappingURL=_64a3a8._.js.map