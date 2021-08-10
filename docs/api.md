<!-- BEGIN title -->

# API

<!-- END title -->

<!-- BEGIN TREE -->

![dependency graph](./api.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- controllers
  - [hello.js](#apicontrollershellojs)
- data-access
  - [hello.js](#apidata-accesshellojs)
- logic
- middleware
- routes
  - [hello.js](#apirouteshellojs)
- utils
- [index.js](#apiindexjs)

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /controllers

<details><summary><a href="../../api/controllers/hello.js" id="apicontrollershellojs">../api/controllers/hello.js</a></summary>

</details>

---

# /data-access

<details><summary><a href="../../api/data-access/hello.js" id="apidata-accesshellojs">../api/data-access/hello.js</a></summary>

## Functions

<dl>
<dt><a href="#constructFilePath">constructFilePath(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Generates an absolute path for a specific file in the app&#39;s data.</p>
</dd>
<dt><a href="#readHello">readHello()</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Reads the contents of &quot;hello.txt&quot;.</p>
</dd>
</dl>

<a name="constructFilePath"></a>

## constructFilePath(fileName) ⇒ <code>string</code>

Generates an absolute path for a specific file in the app's data.

**Returns**: <code>string</code> - An absolute path to that file.

| Param    | Type                | Description       |
| -------- | ------------------- | ----------------- |
| fileName | <code>string</code> | The file to read. |

<a name="readHello"></a>

## readHello() ⇒ <code>Promise.&lt;string&gt;</code>

Reads the contents of "hello.txt".

**Returns**: <code>Promise.&lt;string&gt;</code> - Text content from the "hello.txt" file.

</details>

---

# /logic

---

# /middleware

---

# /routes

<details><summary><a href="../../api/routes/hello.js" id="apirouteshellojs">../api/routes/hello.js</a></summary>

</details>

---

# /utils

---

<details><summary><a href="../../api/index.js" id="apiindexjs">../api/index.js</a></summary>

</details>

<!-- END DOCS -->
