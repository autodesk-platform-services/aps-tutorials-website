import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';

function Footer() {
  let useDefaultFooter = false;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    useDefaultFooter = params.has('footer') && params.get('footer') == 'default';
  }

  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }

  const { copyright, links, logo, style } = footer;
  return (
    useDefaultFooter
      ? <FooterLayout
          style={style}
          links={links && links.length > 0 && <FooterLinks links={links} />}
          logo={logo && <FooterLogo logo={logo} />}
          copyright={copyright && <FooterCopyright copyright={copyright} />}
        />
      : <div id="app-footer" style={{width: '100%'}}></div>
  );
}

export default React.memo(Footer);
