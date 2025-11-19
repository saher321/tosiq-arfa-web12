module.exports = [
"[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const page = ()=>{
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>response.json()).then((data)=>setTodos(data)).catch((error)=>console.error('Error fetching todos:', error));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Todo List"
            }, void 0, false, {
                fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: todos.map((todo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "my-3 p-3 rounded-md bg-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: todo.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " - ",
                            todo.completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                children: "Completed"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                                lineNumber: 19,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Tosiq$2d$web12$2f$web$2f$nextjs$2f$mywebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                var: true,
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                                lineNumber: 19,
                                columnNumber: 102
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, todo.id, true, {
                        fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Tosiq-web12/web/nextjs/mywebsite/app/todos/page.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = page;
}),
];

//# sourceMappingURL=Documents_Tosiq-web12_web_nextjs_mywebsite_app_todos_page_jsx_e6d11ee6._.js.map