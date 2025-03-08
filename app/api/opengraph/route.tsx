import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') ?? 'Matthew Aberham';

    // Load font
    const hassMedium = await fetch(
      new URL(
        '../../../public/fonts/NeueHaasDisplay-Medium.woff',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    const hassRoman = await fetch(
      new URL(
        '../../../public/fonts/NeueHaasDisplay-Roman.woff',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: '64px 64px 64px 96px',
          }}
        >
          {title !== 'Matthew Aberham' ? (
            <div
              style={{
                fontSize: 56,
                fontFamily: 'HassRoman',
                letterSpacing: '-0.02em',
                color: '#161616',
              }}
            >
              Matthew Aberham
            </div>
          ) : (
            <div />
          )}
          <div
            style={{
              fontSize: 92,
              fontFamily: 'HassMedium',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              background: 'white',
              color: '#161616',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'HassMedium',
            data: hassMedium,
            style: 'normal',
          },
          {
            name: 'HassRoman',
            data: hassRoman,
            style: 'normal',
          },
        ],
      }
    );
  } catch (error: any) {
    console.error(error.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
