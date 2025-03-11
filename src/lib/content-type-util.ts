// Function to get the content type of a file
export class ContentTypeUtil {
  private contentTypes: Record<string, string> = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    pdf: "application/pdf",
    ico: "image/x-icon",
  };

  getContentType(filePath: string): string {
    const extension = filePath.split(".").pop()?.toLowerCase() || "";
    return this.contentTypes[extension] || "application/octet-stream";
  }
}
