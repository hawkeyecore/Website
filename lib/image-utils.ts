/**
 * Safely handles image paths to prevent empty strings being passed to src attributes
 * @param imagePath The image path to check
 * @param fallbackPath A fallback image path to use if the primary path is invalid
 * @returns A valid image path or null
 */
export function getSafeImagePath(imagePath: string | undefined | null, fallbackPath: string): string {
  // If the image path is undefined, null, or an empty string, return the fallback
  if (!imagePath || imagePath.trim() === "") {
    return fallbackPath
  }

  // Otherwise return the original path
  return imagePath
}
