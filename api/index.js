var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:F:\websites\projects\destiny-watch\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:F:\websites\projects\destiny-watch\app\routes\auth\callback\bungie.tsx
var bungie_exports = {};
__export(bungie_exports, {
  loader: () => loader
});

// app/services/auth.server.ts
var import_remix_auth = require("remix-auth");

// app/services/session.server.ts
var import_node = require("@remix-run/node");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "destinyitemwatch",
    sameSite: "lax",
    domain: process.env.URL,
    path: "/",
    httpOnly: true,
    secrets: ["process.env.SECRET"],
    secure: false
  }
});
var { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var import_remix_auth_bungie = require("remix-auth-bungie");
var authenticator = new import_remix_auth.Authenticator(sessionStorage);
if (!process.env.BUNGIE_ID || !process.env.BUNGIE_SECRET || !process.env.BUNGIE_APIKEY) {
  throw new Error("Bungie ID, Secret and API Key are required");
}
authenticator.use(new import_remix_auth_bungie.BungieStrategy({
  clientID: process.env.BUNGIE_ID,
  clientSecret: process.env.BUNGIE_SECRET,
  callbackURL: `https://${process.env.URL}/auth/callback/bungie`,
  apiKey: process.env.BUNGIE_APIKEY
}, async ({ profile }) => {
  return profile;
}));

// route:F:\websites\projects\destiny-watch\app\routes\auth\callback\bungie.tsx
var loader = ({ request, params }) => {
  return authenticator.authenticate("bungie", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  });
};

// route:F:\websites\projects\destiny-watch\app\routes\auth\bungie.tsx
var bungie_exports2 = {};
__export(bungie_exports2, {
  action: () => action,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");
var loader2 = () => (0, import_node2.redirect)("/login");
var action = ({ request, params }) => {
  return authenticator.authenticate("bungie", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  });
};

// route:F:\websites\projects\destiny-watch\app\routes\auth\logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
var action2 = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};

// route:F:\websites\projects\destiny-watch\app\routes\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader3
});
var import_react3 = require("@remix-run/react");
var loader3 = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  return user;
};
function Dashboard() {
  let user = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Dashboard"), /* @__PURE__ */ React.createElement("p", null, "You are logged in."), /* @__PURE__ */ React.createElement("p", null, user ? user.displayName : null), /* @__PURE__ */ React.createElement(import_react3.Form, {
    method: "post",
    action: "/auth/logout"
  }, /* @__PURE__ */ React.createElement("button", null, "Logout")));
}

// route:F:\websites\projects\destiny-watch\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react4 = require("@remix-run/react");
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement(import_react4.Form, {
    action: `/auth/bungie`,
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Login to Bungie")));
}

// route:F:\websites\projects\destiny-watch\app\routes\login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});
var import_react5 = require("@remix-run/react");
function Login() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement(import_react5.Form, {
    action: `/auth/bungie`,
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", null, "Bungie")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "e614d24e", "entry": { "module": "/build/entry.client-D4VFQHOW.js", "imports": ["/build/_shared/chunk-7LJW4NCP.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-INQBKYAC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/bungie": { "id": "routes/auth/bungie", "parentId": "root", "path": "auth/bungie", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/bungie-XBZCDMHX.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/callback/bungie": { "id": "routes/auth/callback/bungie", "parentId": "root", "path": "auth/callback/bungie", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/callback/bungie-VKUT7VXF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-JAQMLHXJ.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-657C4TZF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-3YSQMBJZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-AYLR7DQ2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E614D24E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/callback/bungie": {
    id: "routes/auth/callback/bungie",
    parentId: "root",
    path: "auth/callback/bungie",
    index: void 0,
    caseSensitive: void 0,
    module: bungie_exports
  },
  "routes/auth/bungie": {
    id: "routes/auth/bungie",
    parentId: "root",
    path: "auth/bungie",
    index: void 0,
    caseSensitive: void 0,
    module: bungie_exports2
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
