# mcpayment

# Rakamin

## API Reference

## List of APIs

Get all chat transactions

```http
  GET /paymentlist
```

Adding transaction

```http
  POST /addpayment
```
| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of transaction |
| `amount` | `integer` | **Required**. Amount of transaction |
| `type` | `string` | **Required**. tyoe of transaction (income/expense) |

