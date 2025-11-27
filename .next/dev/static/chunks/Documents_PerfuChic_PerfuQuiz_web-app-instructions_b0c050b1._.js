(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const stepLabels = [
    "Patrón",
    "Porosidad",
    "Cuero cabelludo",
    "Estado"
];
function ProgressBar({ currentStep, totalSteps }) {
    const percentage = Math.round(currentStep / totalSteps * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-bar__header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "progress-bar__step",
                        children: [
                            "Paso ",
                            currentStep,
                            " de ",
                            totalSteps
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "progress-bar__percentage",
                        children: [
                            percentage,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-bar__track",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "progress-bar__fill",
                    style: {
                        width: `${percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-bar__labels",
                children: stepLabels.map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `progress-bar__label ${index + 1 === currentStep ? "progress-bar__label--active" : ""} ${index + 1 < currentStep ? "progress-bar__label--completed" : ""}`,
                        children: label
                    }, index, false, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RadioQuestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function RadioQuestion({ name, label, options, value, onChange, helperText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "question-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "question-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "options-list",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "option-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                id: `${name}-${option.value}`,
                                name: name,
                                value: option.value,
                                checked: value === option.value,
                                onChange: (e)=>onChange(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-${option.value}`,
                                className: "option-label",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.value, true, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            helperText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
                lineNumber: 24,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = RadioQuestion;
var _c;
__turbopack_context__.k.register(_c, "RadioQuestion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepPatron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js [app-client] (ecmascript)");
"use client";
;
;
const questionsData = {
    p1: {
        label: "P1 — ¿Cómo describirías tu cabello naturalmente?",
        options: [
            {
                value: "liso",
                label: "Liso"
            },
            {
                value: "ondulado",
                label: "Ondulado"
            },
            {
                value: "rizado",
                label: "Rizado / con rulos"
            },
            {
                value: "muy_rizado_afro",
                label: "Muy rizado / afro"
            },
            {
                value: "no_seguro",
                label: "No estoy seguro"
            }
        ]
    },
    p2: {
        label: "P2 — Cuando lavas tu cabello y se seca sin peinarlo, ¿cómo queda?",
        options: [
            {
                value: "totalmente_lacio",
                label: "Totalmente lacio"
            },
            {
                value: "onda_suave",
                label: "Con onda suave en S"
            },
            {
                value: "ondas_definidas",
                label: "Con ondas definidas o rulos sueltos"
            },
            {
                value: "rulos_marcados",
                label: "Con rulos muy marcados"
            },
            {
                value: "rizo_muy_apretado",
                label: 'Con rizos muy apretados o patrón en "Z"'
            }
        ]
    },
    p3: {
        label: "P3 — ¿Cómo sentís el grosor de cada pelo individual?",
        options: [
            {
                value: "fino",
                label: "Fino (delgadito, se enreda fácil)"
            },
            {
                value: "medio",
                label: "Medio (normal)"
            },
            {
                value: "grueso",
                label: "Grueso (fibra fuerte, rígida)"
            }
        ]
    },
    p4: {
        label: "P4 — Cuando te hacés una raya en el pelo, ¿cuánto cuero cabelludo se ve?",
        options: [
            {
                value: "baja",
                label: "Se ve mucho cuero cabelludo (poca densidad)"
            },
            {
                value: "media",
                label: "Se ve un poco (densidad media)"
            },
            {
                value: "alta",
                label: "No se ve casi nada (alta densidad)"
            }
        ]
    }
};
function StepPatron({ formData, updateFormData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "step-title",
                children: "Patrón y características básicas"
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p1",
                label: questionsData.p1.label,
                options: questionsData.p1.options,
                value: formData.p1,
                onChange: (value)=>updateFormData("p1", value),
                helperText: formData.p1 === "no_seguro" ? "💡 En una futura versión te vamos a mostrar imágenes de referencia para ayudarte." : null
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p2",
                label: questionsData.p2.label,
                options: questionsData.p2.options,
                value: formData.p2,
                onChange: (value)=>updateFormData("p2", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p3",
                label: questionsData.p3.label,
                options: questionsData.p3.options,
                value: formData.p3,
                onChange: (value)=>updateFormData("p3", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p4",
                label: questionsData.p4.label,
                options: questionsData.p4.options,
                value: formData.p4,
                onChange: (value)=>updateFormData("p4", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = StepPatron;
var _c;
__turbopack_context__.k.register(_c, "StepPatron");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepPorosidad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js [app-client] (ecmascript)");
"use client";
;
;
const questionsData = {
    p5: {
        label: "P5 — ¿Qué tan rápido se moja tu cabello bajo la ducha?",
        options: [
            {
                value: "tarda_bastante",
                label: "Tarda bastante en mojarse"
            },
            {
                value: "normal",
                label: "Se moja normalmente"
            },
            {
                value: "instantaneo",
                label: "Se moja al instante"
            }
        ]
    },
    p6: {
        label: "P6 — ¿Tu cabello se seca rápido o lento?",
        options: [
            {
                value: "muy_lento",
                label: "Muy lento (más de lo normal)"
            },
            {
                value: "normal",
                label: "Normal"
            },
            {
                value: "muy_rapido",
                label: "Muy rápido"
            }
        ]
    },
    p7: {
        label: "P7 — ¿Cómo reacciona tu cabello a los productos?",
        options: [
            {
                value: "repelen",
                label: 'Siento que "repelen" el producto / no absorbe fácil'
            },
            {
                value: "absorbe_bien",
                label: "Absorbe bien"
            },
            {
                value: "absorbe_pero_sigue_seco",
                label: "Absorbe mucho, pero sigue seco"
            }
        ]
    }
};
function StepPorosidad({ formData, updateFormData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "step-title",
                children: "Porosidad del cabello"
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "helper-text",
                style: {
                    marginBottom: "1.5rem",
                    fontStyle: "normal"
                },
                children: "La porosidad indica qué tan fácil tu pelo absorbe y pierde agua/producto."
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p5",
                label: questionsData.p5.label,
                options: questionsData.p5.options,
                value: formData.p5,
                onChange: (value)=>updateFormData("p5", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p6",
                label: questionsData.p6.label,
                options: questionsData.p6.options,
                value: formData.p6,
                onChange: (value)=>updateFormData("p6", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p7",
                label: questionsData.p7.label,
                options: questionsData.p7.options,
                value: formData.p7,
                onChange: (value)=>updateFormData("p7", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = StepPorosidad;
var _c;
__turbopack_context__.k.register(_c, "StepPorosidad");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepCueroCabelludo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js [app-client] (ecmascript)");
"use client";
;
;
const questionsData = {
    p8: {
        label: "P8 — ¿Cómo sentís tu cuero cabelludo un día después de lavarlo?",
        options: [
            {
                value: "seco",
                label: "Tirante / seco / con picazón"
            },
            {
                value: "normal",
                label: "Normal, cómodo"
            },
            {
                value: "graso",
                label: "Graso, se pega al cuero cabelludo"
            }
        ]
    },
    p9: {
        label: "P9 — ¿Notás descamación (caspa)?",
        options: [
            {
                value: "no",
                label: "No"
            },
            {
                value: "caspa_blanca",
                label: "Sí, escamas blancas"
            },
            {
                value: "dermatitis_seborreica",
                label: "Sí, escamas amarillas grasosas"
            },
            {
                value: "no_se",
                label: "No sé / a veces"
            }
        ]
    },
    p10: {
        label: "P10 — ¿Tenés sensibilidad o picazón frecuente?",
        options: [
            {
                value: "si",
                label: "Sí"
            },
            {
                value: "no",
                label: "No"
            },
            {
                value: "ocasional",
                label: "Ocasional"
            }
        ]
    }
};
function StepCueroCabelludo({ formData, updateFormData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "step-title",
                children: "Cuero cabelludo"
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p8",
                label: questionsData.p8.label,
                options: questionsData.p8.options,
                value: formData.p8,
                onChange: (value)=>updateFormData("p8", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p9",
                label: questionsData.p9.label,
                options: questionsData.p9.options,
                value: formData.p9,
                onChange: (value)=>updateFormData("p9", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p10",
                label: questionsData.p10.label,
                options: questionsData.p10.options,
                value: formData.p10,
                onChange: (value)=>updateFormData("p10", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = StepCueroCabelludo;
var _c;
__turbopack_context__.k.register(_c, "StepCueroCabelludo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckboxQuestion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CheckboxQuestion({ name, label, options, values = [], onChange }) {
    const handleChange = (optionValue)=>{
        let newValues;
        if (values.includes(optionValue)) {
            newValues = values.filter((v)=>v !== optionValue);
        } else {
            // Si selecciona "bien", quitar las otras opciones
            if (optionValue === "bien") {
                newValues = [
                    "bien"
                ];
            } else {
                // Si selecciona otra opción, quitar "bien"
                newValues = [
                    ...values.filter((v)=>v !== "bien"),
                    optionValue
                ];
            }
        }
        onChange(newValues);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "question-group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "question-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "checkbox-list",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "checkbox-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: `${name}-${option.value}`,
                                name: name,
                                value: option.value,
                                checked: values.includes(option.value),
                                onChange: ()=>handleChange(option.value)
                            }, void 0, false, {
                                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: `${name}-${option.value}`,
                                className: "checkbox-label",
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.value, true, {
                        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = CheckboxQuestion;
var _c;
__turbopack_context__.k.register(_c, "CheckboxQuestion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepEstadoDanio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/RadioQuestion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$CheckboxQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/CheckboxQuestion.js [app-client] (ecmascript)");
"use client";
;
;
;
const questionsData = {
    p11: {
        label: "P11 — ¿Tenés coloración o decoloración?",
        options: [
            {
                value: "no",
                label: "No"
            },
            {
                value: "coloracion",
                label: "Sí, coloración"
            },
            {
                value: "decoloracion",
                label: "Sí, decoloración / mechas / balayage"
            }
        ]
    },
    p12: {
        label: "P12 — ¿Usás herramientas de calor? (planchita, buclera, secador)",
        options: [
            {
                value: "casi_nunca",
                label: "Casi nunca"
            },
            {
                value: "uno_dos_veces_semana",
                label: "1–2 veces por semana"
            },
            {
                value: "tres_o_mas_veces_semana",
                label: "3 o más veces por semana"
            }
        ]
    },
    p13: {
        label: "P13 — ¿Sentís tu pelo...? (podés elegir varias)",
        options: [
            {
                value: "seco",
                label: "Seco"
            },
            {
                value: "fragil",
                label: "Frágil / se rompe"
            },
            {
                value: "frizz",
                label: "Con frizz"
            },
            {
                value: "opaco",
                label: "Opaco"
            },
            {
                value: "puntas_abiertas",
                label: "Puntas abiertas"
            },
            {
                value: "bien",
                label: "Bien, sin problemas importantes"
            }
        ]
    }
};
function StepEstadoDanio({ formData, updateFormData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "step-title",
                children: "Estado y daño"
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p11",
                label: questionsData.p11.label,
                options: questionsData.p11.options,
                value: formData.p11,
                onChange: (value)=>updateFormData("p11", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$RadioQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p12",
                label: questionsData.p12.label,
                options: questionsData.p12.options,
                value: formData.p12,
                onChange: (value)=>updateFormData("p12", value)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$CheckboxQuestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: "p13",
                label: questionsData.p13.label,
                options: questionsData.p13.options,
                values: formData.p13,
                onChange: (values)=>updateFormData("p13", values)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = StepEstadoDanio;
var _c;
__turbopack_context__.k.register(_c, "StepEstadoDanio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Servicio para comunicación con el backend
 * En esta versión MVP, simula el envío de datos
 */ /**
 * Envía el payload del formulario al backend
 * @param {Object} payload - Objeto con las respuestas del formulario
 * @returns {Promise<Object>} - Respuesta simulada del servidor
 */ __turbopack_context__.s([
    "buildPayload",
    ()=>buildPayload,
    "sendToBackend",
    ()=>sendToBackend
]);
async function sendToBackend(payload) {
    // Log del payload para desarrollo
    console.log("=== PAYLOAD ENVIADO AL BACKEND ===");
    console.log(JSON.stringify(payload, null, 2));
    console.log("==================================");
    // Simular latencia de red
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                success: true,
                message: "Diagnóstico recibido correctamente",
                timestamp: new Date().toISOString(),
                payload: payload
            });
        }, 1500);
    });
}
function buildPayload(formData) {
    return {
        formVersion: "1.0",
        rawAnswers: {
            p1_patron_general: formData.p1 || null,
            p2_patron_secado: formData.p2 || null,
            p3_grosor: formData.p3 || null,
            p4_densidad: formData.p4 || null,
            p5_mojado_rapidez: formData.p5 || null,
            p6_secado_rapidez: formData.p6 || null,
            p7_reaccion_productos: formData.p7 || null,
            p8_cuero_cabelludo: formData.p8 || null,
            p9_caspa: formData.p9 || null,
            p10_sensibilidad: formData.p10 || null,
            p11_color_deco: formData.p11 || null,
            p12_calor: formData.p12 || null,
            p13_estado: formData.p13 || []
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormularioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$ProgressBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/ProgressBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepPatron$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPatron.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepPorosidad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepPorosidad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepCueroCabelludo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepCueroCabelludo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepEstadoDanio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/components/Form/StepEstadoDanio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const TOTAL_STEPS = 4;
// Campos requeridos por paso
const requiredFields = {
    1: [
        "p1",
        "p2",
        "p3",
        "p4"
    ],
    2: [
        "p5",
        "p6",
        "p7"
    ],
    3: [
        "p8",
        "p9",
        "p10"
    ],
    4: [
        "p11",
        "p12"
    ]
};
function FormularioPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
        p10: "",
        p11: "",
        p12: "",
        p13: []
    });
    const updateFormData = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        setValidationError("");
    };
    const validateStep = ()=>{
        const fields = requiredFields[currentStep];
        for (const field of fields){
            if (!formData[field] || formData[field] === "") {
                return false;
            }
        }
        return true;
    };
    const handleNext = ()=>{
        if (!validateStep()) {
            setValidationError("Por favor, respondé todas las preguntas antes de continuar.");
            return;
        }
        setValidationError("");
        setCurrentStep((prev)=>Math.min(prev + 1, TOTAL_STEPS));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handlePrev = ()=>{
        setValidationError("");
        setCurrentStep((prev)=>Math.max(prev - 1, 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleSubmit = async ()=>{
        if (!validateStep()) {
            setValidationError("Por favor, respondé todas las preguntas obligatorias.");
            return;
        }
        setIsSubmitting(true);
        try {
            const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildPayload"])(formData);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendToBackend"])(payload);
            // Guardar en sessionStorage para la página de resultado
            sessionStorage.setItem("diagnosticoPayload", JSON.stringify(payload));
            sessionStorage.setItem("diagnosticoResponse", JSON.stringify(response));
            router.push("/resultado");
        } catch (error) {
            console.error("Error al enviar:", error);
            setValidationError("Hubo un error al procesar tu diagnóstico. Por favor, intentá de nuevo.");
            setIsSubmitting(false);
        }
    };
    const renderStep = ()=>{
        switch(currentStep){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepPatron$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    formData: formData,
                    updateFormData: updateFormData
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 105,
                    columnNumber: 16
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepPorosidad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    formData: formData,
                    updateFormData: updateFormData
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 107,
                    columnNumber: 16
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepCueroCabelludo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    formData: formData,
                    updateFormData: updateFormData
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 109,
                    columnNumber: 16
                }, this);
            case 4:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$StepEstadoDanio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    formData: formData,
                    updateFormData: updateFormData
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 111,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    if (isSubmitting) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loading__spinner"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "loading__text",
                            children: "Procesando tu diagnóstico..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 121,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
            lineNumber: 119,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$components$2f$Form$2f$ProgressBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    currentStep: currentStep,
                    totalSteps: TOTAL_STEPS
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                renderStep(),
                validationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "validation-error",
                    children: validationError
                }, void 0, false, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 137,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "form-navigation",
                    children: [
                        currentStep > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn--secondary",
                            onClick: handlePrev,
                            children: "Anterior"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        currentStep < TOTAL_STEPS ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn--primary",
                            onClick: handleNext,
                            children: "Siguiente"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn btn--primary",
                            onClick: handleSubmit,
                            children: "Finalizar diagnóstico"
                        }, void 0, false, {
                            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/app/formulario/page.js",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(FormularioPage, "ua7YT3haWSP65sjZjrigeotu58k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$PerfuChic$2f$PerfuQuiz$2f$web$2d$app$2d$instructions$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FormularioPage;
var _c;
__turbopack_context__.k.register(_c, "FormularioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/PerfuChic/PerfuQuiz/web-app-instructions/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Documents_PerfuChic_PerfuQuiz_web-app-instructions_b0c050b1._.js.map