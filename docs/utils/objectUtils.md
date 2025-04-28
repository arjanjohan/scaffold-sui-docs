# Object Utilities

Utilities for working with IOTA objects and their properties.

## Functions

### parseImageURL
```ts
function parseImageURL(display?: Record<string, string> | null): string
```
Parses and validates an image URL from an object's display data, supporting both HTTP and IPFS URLs.

### parseObjectType
```ts
function parseObjectType(data: IotaObjectResponse): string
```
Extracts the type of an object from its response data.

### getOwnerStr
```ts
function getOwnerStr(owner: ObjectOwner | string): string
```
Converts an object owner to a string representation.

### checkIsPropertyType
```ts
function checkIsPropertyType(value: unknown): boolean
```
Checks if a value is a valid property type (number or string).

### extractName
```ts
function extractName(display?: Record<string, string> | null): string | null | undefined
```
Extracts the name from an object's display data.

### getDisplayUrl
```ts
function getDisplayUrl(url?: string): { href: string; display: string } | string | null
```
Formats a URL for display, extracting the hostname for cleaner presentation.

## Usage Examples

```tsx
// Parse image URL
const imageUrl = parseImageURL(object.data?.display);
// Returns: "https://ipfs.io/ipfs/Qm..." or "https://example.com/image.jpg"

// Get object type
const type = parseObjectType(object);
// Returns: "Move Package" or the object's type

// Get owner string
const owner = getOwnerStr(object.data?.owner);
// Returns: "0x123..." or "Shared"

// Check property type
const isValid = checkIsPropertyType(value);
// Returns: true if value is number or string

// Extract name
const name = extractName(object.data?.display);
// Returns: object name or undefined

// Format URL for display
const displayUrl = getDisplayUrl("https://example.com/path");
// Returns: { href: "https://example.com/path", display: "example.com" }
```