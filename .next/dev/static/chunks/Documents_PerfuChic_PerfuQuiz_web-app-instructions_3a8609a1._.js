(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultadoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ResultadoPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultadoPage.useEffect": ()=>{
            const storedPayload = sessionStorage.getItem("diagnosticoPayload");
            if (!storedPayload) {
                router.push("/formulario");
                return;
            }
            setPayload(JSON.parse(storedPayload));
            setIsLoading(false);
        }
    }["ResultadoPage.useEffect"], [
        router
    ]);
    const handleRestart = ()=>{
        sessionStorage.removeItem("diagnosticoPayload");
        sessionStorage.removeItem("diagnosticoResponse");
        router.push("/formulario");
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading__spinner"
                    }, void 0, false, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "loading__text",
                        children: "Cargando resultados..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "resultado",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "resultado__card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "resultado__icon",
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "resultado__title",
                            children: "¡Diagnóstico completado!"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "resultado__message",
                            children: "Gracias por completar el diagnóstico. Vamos a usar tus respuestas para crear un análisis personalizado de tu cabello y recomendarte los mejores productos para tu rutina."
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "resultado__actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn btn--secondary",
                                    onClick: handleRestart,
                                    children: "Hacer otro diagnóstico"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "btn btn--primary",
                                    children: "Volver al inicio"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "resultado__debug",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "resultado__debug-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "resultado__debug-title",
                                    children: "📋 Payload para Backend"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "resultado__debug-badge",
                                    children: "Modo desarrollo"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "resultado__debug-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                children: JSON.stringify(payload, null, 2)
                            }, void 0, false, {
                                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/resultado/page.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ResultadoPage, "Cddxokkz1E3d2hGrgLvkp0LVbiA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultadoPage;
var _c;
__turbopack_context__.k.register(_c, "ResultadoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_PerfuChic_PerfuQuiz_web-app-instructions_3a8609a1._.js.map