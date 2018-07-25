# apollo-server-internet-archive

Apollo Server v2.0 wrapper for [Archive.org](internet-archive)’s REST API.

![screenshot](screenshot.png)

## Setup

```
npm i
npm run start
```

GraphQL endpoint is at `localhost:4000`.

GraphQL playground is at `localhost:4000/graphql`.

## Schema

### Item

Get an individual item by ID. To find an item’s ID, look at the URL segment
after `/details/`. For instance, for the URL
`https://archive.org/details/principleofrelat00eins`, the item ID is
`principleofrelat00eins`.

## Operations

### Query

| Name | Type     | Required |
| :--- | :------- | :------- |
| `id` | `String` | ✅        |

### Example

```
{
  item(id: "bacteria_friend_and_foe") {
    metadata {
      subject
      title
      mediatype
    }
  }
}

```

### Fields

![docs-screenshot](docs-screenshot.png)

To view the data structure, clone this repo and run it locally (`npm i && npm
run start'), navigate to `localhost:4000/graphql`. Then click “Schema” on the
top-right.

### Books

Coming soon!

### Search

Coming soon!

### Wayback Machine

Coming soon!

## Data Coercion

This endpoint adds a few niceties to make consuption & parsing easier in
JavaScript.

### Polymorphism

- Archive.org’s API can return some fields as either a string, a list of strings, or missing. In these instances a list will be always returned (empty in the case of missing data).

### Language

Archive.org’s API will return many different results for language (e.g.:
`English` or `eng` or `en` all refer to the same language). For that reason,
`metadata.language` is coerced into the [RFC 5646 spec][lang-spec] (e.g:
`en`, `en-CA`, `de`, `ja`, `zh-CN`).

### Year

`metadata.year` is coerced into an integer, with negative numbers
representing `BCE`
(e.g.: `1970` for _1970 CE_, `-300` for _300 BCE_).


[internet-archive]: https://archive.org
[lang-spec]: https://tools.ietf.org/html/rfc5646
