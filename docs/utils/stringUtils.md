# String Utilities

Utilities for string manipulation and URL handling, particularly for IPFS content.

## Functions

### hexToAscii
```ts
function hexToAscii(hex: string): string | undefined
```
Converts a hex string to ASCII.

### trimStdLibPrefix
```ts
function trimStdLibPrefix(str: string): string
```
Removes the standard library prefix (0x2::) from a string.

### findIPFSvalue
```ts
function findIPFSvalue(url: string): string | undefined
```
Extracts the IPFS hash from an IPFS URL.

### transformURL
```ts
function transformURL(url: string): string
```
Transforms an IPFS URL to use the IPFS gateway.

### extractFileType
```ts
function extractFileType(displayString: string, signal: AbortSignal): Promise<string>
```
Extracts the file type from a URL, checking both Content-Type header and file extension.

### genFileTypeMsg
```ts
function genFileTypeMsg(displayString: string, signal: AbortSignal): Promise<string>
```
Generates a human-readable file type message.

## Usage Examples

```tsx
// Convert hex to ASCII
const ascii = hexToAscii("0x48656c6c6f"); // "Hello"

// Trim standard library prefix
const trimmed = trimStdLibPrefix("0x2::coin::Coin"); // "coin::Coin"

// Handle IPFS URLs
const ipfsHash = findIPFSvalue("ipfs://Qm..."); // "Qm..."
const gatewayUrl = transformURL("ipfs://Qm..."); // "https://ipfs.io/ipfs/Qm..."

// Get file type
const fileType = await extractFileType("https://example.com/image.jpg", signal);
// Returns: "jpg" or "png" or "Image"

// Generate file type message
const typeMsg = await genFileTypeMsg("https://example.com/image.jpg", signal);
// Returns: "1 JPG File" or "1 Image File"
```