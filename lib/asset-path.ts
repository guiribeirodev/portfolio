/**
 * Helper para gerar URLs de assets considerando o basePath do Next.js
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio'
  
  // Remove a barra inicial do path se existir
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // Retorna o caminho completo com basePath
  return `${basePath}/${normalizedPath}`
}
