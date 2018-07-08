# Archive-GraphQL

GraphQL wrapper for [Archive.org](https://archive.org)’s open API.

![screenshot](screenshot.png)

## Setup

```
npm i
npm run start
```

GraphQL endpoint is at `localhost:3000/graphql`.

GraphiQL graphical endpoint at `localhost:3000/graphiql`.

## Schema

### Item

Get an individual item by ID. To find an item’s ID, look at the URL segment
after `/details/`. For instance, for the URL
`https://archive.org/details/principleofrelat00eins`, the item ID is
`principleofrelat00eins`.

### Query

| Name | Type     | Required |
| :--- | :------- | :------- |
| `id` | `String` | ✅        |

### Example

```
{
  item(id: "principleofrelat00eins") {
    files_count,
    metadata {
      year
    }
  }
}
```

### Books

Coming soon!

### Search

Coming soon!

### Wayback Machine

Coming soon!
