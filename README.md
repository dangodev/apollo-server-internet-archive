# apollo-server-internet-archive

Apollo Server v2.0 wrapper for [Archive.org](internet-archive)’s REST API.
Uses [apollo-server-koa][apollo-server-koa] built for [koa][koa], a modern,
new server framework from the Express.js team.

![screenshot](screenshot.png)

## Setup

```
npm i
npm run start
```

GraphQL endpoint is at `localhost:4000`.

GraphQL playground is at `localhost:4000/graphql`.

## Queries

### Item

| Name | Type     | Required | Description                                            |
| :--- | :------- | :------- | :----------------------------------------------------- |
| `id` | `String` | ✅        | Look up an item by ID (sometimes called `identifier`). |

#### Example

```graphql
{
  item(id: "bacteria_friend_and_foe") {
    metadata {
      identifier
      title
      subject
      mediatype
    }
  }
}
```

**💁 Tip**

`metadata.identifier` is the ID. You’ll probably want that in most instances.

### Search

| Name    | Type            | Required | Default | Description                                     |
| :------ | :-------------- | :------- | :------ | :---------------------------------------------- |
| `query` | `String`        | ✅        |         | Your search query                               |
| `limit` | `Number`        |          | `50`    | Number of items to return                       |
| `sort`  | `Array(String)` |          |         | Sort by fields (can specify up to 3, see below) |
| `start` | `Number`        |          | `0`     | If paginating results, where to start           |

#### Sort Fields

<details>
  <summary>View all options for <code>sort</code></summary>
  <pre><code>addeddate asc
addeddate desc
avg_rating asc
avg_rating desc
call_number asc
call_number desc
createdate asc
createdate desc
creatorSorter asc
creatorSorter desc
creatorSorterRaw asc
creatorSorterRaw desc
date asc
date desc
downloads asc
downloads desc
foldoutcount asc
foldoutcount desc
headerImage asc
headerImage desc
identifier asc
identifier desc
identifierSorter asc
identifierSorter desc
imagecount asc
imagecount desc
indexdate asc
indexdate desc
item_size asc
item_size desc
languageSorter asc
languageSorter desc
licenseurl asc
licenseurl desc
mediatype asc
mediatype desc
mediatypeSorter asc
mediatypeSorter desc
month asc
month desc
nav_order asc
nav_order desc
num_reviews asc
num_reviews desc
programSorter asc
programSorter desc
publicdate asc
publicdate desc
reviewdate asc
reviewdate desc
stars asc
stars desc
titleSorter asc
titleSorter desc
titleSorterRaw asc
titleSorterRaw desc
week asc
week desc
year asc
year desc</code></pre>
</details>

#### Example

```graphql
{
  search(
    query: "baking bread"
    sort: ["year desc", "month desc"]
  ) {
    response {
      numFound
      docs {
        identifier
        title
        description
        year
        mediatype
      }
    }
  }
}
```

### Books

Coming soon!

### Wayback Machine

Coming soon!

## Data Coercion

This endpoint adds a few niceties to make consuption & parsing easier in
JavaScript.

### Polymorphism

- Archive.org’s API can return some fields as either a string, a list of strings, or missing. In these instances a list of strings will be always returned (or an empty list in the case of missing data).

### Language

Archive.org’s API will return many different results for language (e.g.:
`English` or `eng` or `en` all refer to the same language). For that reason,
`metadata.language` is coerced into the [RFC 5646 spec][lang-spec] (e.g:
`en`, `en-CA`, `de`, `ja`, `zh-CN`).

### Year

`metadata.year` is coerced into an integer, with negative numbers
representing `BCE`
(e.g.: `1970` for _1970 CE_, `-300` for _300 BCE_).


[apollo-server-koa]: https://www.npmjs.com/package/apollo-server-koa
[internet-archive]: https://archive.org
[koa]: https://koajs.com/
[lang-spec]: https://tools.ietf.org/html/rfc5646
