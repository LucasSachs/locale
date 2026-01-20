import { type Locale } from '@/lib/lang/dictionaries'
import { LangService } from '@/lib/services/lang'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  await LangService.setLocale(locale)

  // This ensures that we are gonna get the right host, even if we are using a network proxy
  const host = request.headers.get('x-forwarded-host')
  const proto = request.headers.get('x-forwarded-proto')

  // TODO > Redirects to the origin route, and not the root route
  const url = new URL('/', `${proto}://${host}`)

  return NextResponse.redirect(url)
}
