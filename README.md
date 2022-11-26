<h1 align="center">DOC DOCS - NEXTJS DOCUMENTATION</h1>
<div align="center">
<img style="width:70%" src="./website/public/Thesis-rafiki.png"/>
</div>
<hr>
<p align="center">
doc_docs is for NextJS projects, he use the file routing method of NextJS to create a custom documentation.
</p>
<hr>

<!-- <a style="font-size: 1.4rem" href="https://doc-docs.vercel.app/docs" target="_blank">Click here to acess the complete documentation</a> -->

### TO USE

install the package:

```
npm i doc_docs
```

after:

```
import ComponentOrDocs from "doc_docs";
```

after init the basic configuration:

- remove the `<Component {...pageProps} />` of `_app`;
- add the `<ComponentOrDocs/>`;
- add `router` to args function;
- pass basic properties to component:

```
<ComponentOrDocs
    Component={Component}
    pageProps={pageProps}
    route={router}/>
```

##### Example:

```
import React from "react";
import ComponentOrDocs from "doc_docs";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ComponentOrDocs
      Component={Component}
      pageProps={pageProps}
      route={router}
      configDirs={{
        dirs: [ "api", "other_path"],
        subDirs: { api: ["user", "auth"] },
      }}
    />
  );
}

export default MyApp;
```

Now you can create a folder `docs` inside your folder `pages`;
- inside the folder docs create a index file.
Just it... your doc_docs is done!

### MENU

to config your menu you can create folders inside the `docs` folder;
and to display you just need change the atribute `configDirs` in your
`_app` component;

`dirs:` is a simple folder with the index file inside;
`subDirs:` is a submenu configuration to create a select folder in menu;

##### Example:

```
import React from "react";
import ComponentOrDocs from "doc_docs";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ComponentOrDocs
      Component={Component}
      pageProps={pageProps}
      route={router}
      // this is a menu configuration;
      configDirs={{
        dirs: [ "api", "other_path"],
        subDirs: { api: ["user", "auth"] },
      }}
      // end of menu configuration;
    />
  );
}

export default MyApp;
```

### CUSTOM LOGO

to set a custom logo you can use `projectLogo` attribute;

this attribute accept a JSX.Element or a String;

##### Example:

```
import React from "react";
import ComponentOrDocs from "doc_docs";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ComponentOrDocs
      Component={Component}
      pageProps={pageProps}
      route={router}
      configDirs={{
        dirs: [ "api", "other_path"],
        subDirs: { api: ["user", "auth"] },
      }}

      projectLogo={your custom logo here}
    />
  );
}

export default MyApp;
```

### SOCIAL NETWORK

to add header icons with your social networks you can
use the principal component;

You can set:

- github;
- website;
- instagram;
- linkedin;
- discord;
- facebook;

##### Example:

```
import React from "react";
import ComponentOrDocs from "doc_docs";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ComponentOrDocs
      Component={Component}
      pageProps={pageProps}
      route={router}
      configDirs={{
        dirs: [ "api", "other_path"],
        subDirs: { api: ["user", "auth"] },
      }}

      // example social networks:

      github="https://github.com/your_nickname"
      website="https://your_website.com"
      instagram="https://instagram.com/your_username"
    />
  );
}

export default MyApp;
```

### PREBUILT COMPONENTS

`import { name_of_component } from "doc_docs/components"`

##### Components:

`TitleDoc:`

Title for page docs!

```
<TitleDoc title="Your Title" />
```

`ComponentDoc:`

- `options` and `description` is optional;
- `options` config a table with the component props;

```
 <ComponentDoc
        background="grey"
        element={<h1>Here you can expose Components</h1>}
        options={[
          { prop: "OnClick", default: "none", accept: "() => void" },
          { prop: "children", default: "none", accept: "string" },
        ]}
        description={
          "optional description for this"
        }
      />

```

`Code:`

```
<Code
  language="name_of_language"
  code={Your code here} />
```

`DescriptionDoc:`

```
<DescriptionDoc
    description="this is a description example" />
```
