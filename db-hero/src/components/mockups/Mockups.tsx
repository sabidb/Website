import React from 'react';
import './mockups.css';

/* ------------------------------------------------------------------
   Illustrative, clearly-generic restaurant-app UI rendered in pure CSS.
   These represent the kinds of screens we build — they are NOT
   screenshots of any specific restaurant. Real screenshots can replace
   them via the `image` field in site.config.ts.
   ------------------------------------------------------------------ */

const StatusBar = () => (
  <div className="statusbar">
    <span>9:41</span>
    <span className="dots"><i /><i /><i /></span>
  </div>
);

const MenuScreen = () => (
  <div className="scr">
    <StatusBar />
    <div className="appbar">
      <div>
        <div className="loc">Deliver to</div>
        <div className="place">Riyadh · Al Olaya</div>
      </div>
      <div className="avatar" />
    </div>
    <div className="searchbar">🔍 Search dishes, categories…</div>
    <div className="cats">
      <span className="on">Popular</span><span>Burgers</span><span>Grills</span><span>Sides</span>
    </div>
    <div className="plist">
      {[
        { n: 'Signature Burger', d: 'Beef · cheddar · house sauce', p: '32 SAR', v: '' },
        { n: 'Mixed Grill Plate', d: 'Chicken · kofta · rice', p: '58 SAR', v: 'v2' },
        { n: 'Loaded Fries', d: 'Cheese · crispy onions', p: '21 SAR', v: 'v3' },
        { n: 'Fresh Lemonade', d: 'Mint · ice', p: '14 SAR', v: 'v2' },
      ].map((x, i) => (
        <div className="pcard" key={i}>
          <div className={`pthumb ${x.v}`} />
          <div className="pmeta"><b>{x.n}</b><small>{x.d}</small></div>
          <div className="price">{x.p}</div>
          <div className="plus">+</div>
        </div>
      ))}
    </div>
    <div className="tabbar"><i className="on" /><i /><i /><i /></div>
  </div>
);

const ProductScreen = () => (
  <div className="scr">
    <div className="hero-img" />
    <div style={{ padding: '12px 16px 4px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>Signature Burger</div>
      <div style={{ color: 'var(--text-3)', fontSize: 10, marginTop: 2 }}>Choose your options</div>
    </div>
    <div className="opt-row"><span>Single patty</span><span className="r on" /></div>
    <div className="opt-row"><span>Double patty · +12 SAR</span><span className="r" /></div>
    <div className="opt-row"><span>Add cheese · +4 SAR</span><span className="r on" /></div>
    <div className="opt-row"><span>Spicy sauce</span><span className="r" /></div>
    <div className="sheet">
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, color: 'var(--text-3)' }}>Total</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--green-700)', fontSize: 15 }}>36 SAR</div>
      </div>
      <div className="plus" style={{ width: 'auto', padding: '10px 18px', borderRadius: 999, fontSize: 11, fontWeight: 700 }}>Add to cart</div>
    </div>
  </div>
);

const CheckoutScreen = () => (
  <div className="scr">
    <StatusBar />
    <div className="appbar"><div className="place">Checkout</div><div /></div>
    <div className="srow"><span>Signature Burger ×1</span><span>36 SAR</span></div>
    <div className="srow"><span>Loaded Fries ×1</span><span>21 SAR</span></div>
    <div className="srow"><span>Delivery</span><span>10 SAR</span></div>
    <div className="srow"><span>VAT (15%)</span><span>10.05 SAR</span></div>
    <div className="srow total"><span>Total</span><span>77.05 SAR</span></div>
    <div style={{ padding: '10px 16px 2px', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-display)' }}>Payment</div>
    <div className="paycard"><div className="brandmark" /><div style={{ fontSize: 10, fontWeight: 700 }}>Card •••• 4242</div><div style={{ marginLeft: 'auto', color: 'var(--green-700)', fontSize: 10, fontWeight: 700 }}>Selected</div></div>
    <div className="sheet"><div className="plus" style={{ width: '100%', borderRadius: 12, padding: '12px', fontSize: 12, fontWeight: 700 }}>Place order · 77.05 SAR</div></div>
  </div>
);

const TrackingScreen = () => (
  <div className="scr">
    <StatusBar />
    <div className="appbar"><div className="place">Order #10482</div><div style={{ fontSize: 10, color: 'var(--green-700)', fontWeight: 700 }}>On the way</div></div>
    <div className="map"><div className="road" /><div className="pin" /></div>
    <div className="track">
      <div className="tstep done"><div className="node" /><div><b>Order confirmed</b><small>9:41 AM</small></div></div>
      <div className="tstep done"><div className="node" /><div><b>Preparing in kitchen</b><small>9:46 AM</small></div></div>
      <div className="tstep active"><div className="node" /><div><b>Out for delivery</b><small>Driver: Omar · 8 min away</small></div></div>
      <div className="tstep"><div className="node" /><div><b>Delivered</b><small>Estimated 10:12 AM</small></div></div>
    </div>
  </div>
);

const AdminScreen = () => (
  <div className="scr">
    <div className="adm">
      <div className="adm__side">
        <div className="logo" /><i className="on" /><i /><i /><i /><i />
      </div>
      <div className="adm__main">
        <div className="adm__top"><b>Dashboard</b><span style={{ fontSize: 9, color: 'var(--text-3)' }}>All branches ▾</span></div>
        <div className="kpis">
          <div className="kpi"><small>Orders today</small><b>248</b><span className="up">▲ live</span></div>
          <div className="kpi"><small>Revenue</small><b>18.4k</b><span className="up">SAR</span></div>
          <div className="kpi"><small>Avg. ticket</small><b>74</b><span className="up">SAR</span></div>
          <div className="kpi"><small>Active branches</small><b>4</b><span className="up">online</span></div>
        </div>
        <div className="panels">
          <div className="panel">
            <h5>Orders by hour</h5>
            <div className="bars">{[40, 55, 35, 70, 60, 85, 50, 75].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
          </div>
          <div className="panel">
            <h5>Recent orders</h5>
            <div className="trow"><span>#10482 · Olaya</span><span className="badge g">Paid</span></div>
            <div className="trow"><span>#10481 · Malaz</span><span className="badge y">Kitchen</span></div>
            <div className="trow"><span>#10480 · Olaya</span><span className="badge g">Delivered</span></div>
            <div className="trow" style={{ borderBottom: 'none' }}><span>#10479 · Nakheel</span><span className="badge g">Paid</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const KitchenScreen = () => (
  <div className="scr">
    <div className="kds">
      {[
        { id: '#10482', t: '2:14', items: ['Signature Burger', 'Loaded Fries', 'Lemonade'], late: false },
        { id: '#10481', t: '6:03', items: ['Mixed Grill ×2', 'Rice', 'Salad'], late: true },
        { id: '#10483', t: '0:42', items: ['Chicken Wrap', 'Fries'], late: false },
        { id: '#10484', t: '1:20', items: ['Double Burger', 'Onion Rings'], late: false },
        { id: '#10485', t: '3:55', items: ['Family Meal', 'Drinks ×4'], late: false },
        { id: '#10486', t: '0:15', items: ['Kids Meal'], late: false },
      ].map((k, i) => (
        <div className={`ticket ${k.late ? 'late' : ''}`} key={i}>
          <h6><span>{k.id}</span><span style={{ color: k.late ? 'var(--gold)' : 'var(--text-3)' }}>{k.t}</span></h6>
          <ul>{k.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
        </div>
      ))}
    </div>
  </div>
);

const DeliveryScreen = () => (
  <div className="scr">
    <div className="dboard">
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13 }}>Delivery board · 4 active</div>
      <div>
        {[
          { d: 'Omar A.', o: '#10482', z: 'Al Olaya', s: 'On the way', g: true },
          { d: 'Yousef K.', o: '#10480', z: 'Al Malaz', s: 'Picking up', g: false },
          { d: 'Salem R.', o: '#10478', z: 'Al Nakheel', s: 'On the way', g: true },
          { d: 'Faisal M.', o: '#10475', z: 'Al Olaya', s: 'Delivered', g: true },
        ].map((r, i) => (
          <div className="drow" key={i}>
            <div className="driver"><div className="av" /><b>{r.d}</b></div>
            <span>{r.o}</span><span>{r.z}</span>
            <span className={`badge ${r.g ? 'g' : 'y'}`}>{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReportsScreen = () => (
  <div className="scr">
    <div className="rep">
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, marginBottom: 12 }}>Sales reports</div>
      <div className="panel" style={{ marginBottom: 10 }}>
        <h5>Revenue trend · last 7 days</h5>
        <div className="line-chart" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div className="panel" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div className="donut" />
          <div style={{ fontSize: 9 }}>
            <div style={{ color: 'var(--green-700)', fontWeight: 700 }}>■ Dine-in 45%</div>
            <div style={{ color: 'var(--green-500)', fontWeight: 700 }}>■ Delivery 25%</div>
            <div style={{ color: 'var(--gold)', fontWeight: 700 }}>■ Pickup 18%</div>
            <div style={{ color: '#9fb0a8', fontWeight: 700 }}>■ Other 12%</div>
          </div>
        </div>
        <div className="panel">
          <h5>Top branches</h5>
          <div className="trow"><span>Al Olaya</span><b>7.2k</b></div>
          <div className="trow"><span>Al Malaz</span><b>5.1k</b></div>
          <div className="trow" style={{ borderBottom: 'none' }}><span>Al Nakheel</span><b>3.9k</b></div>
        </div>
      </div>
    </div>
  </div>
);

const registry: Record<string, React.FC> = {
  menu: MenuScreen,
  product: ProductScreen,
  checkout: CheckoutScreen,
  tracking: TrackingScreen,
  admin: AdminScreen,
  kitchen: KitchenScreen,
  delivery: DeliveryScreen,
  reports: ReportsScreen,
};

export const PhoneMock: React.FC<{ screen: string }> = ({ screen }) => {
  const Screen = registry[screen] || MenuScreen;
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__notch" />
      <div className="phone__screen"><Screen /></div>
    </div>
  );
};

export const BrowserMock: React.FC<{ screen: string; url?: string }> = ({ screen, url }) => {
  const Screen = registry[screen] || AdminScreen;
  return (
    <div className="browser" aria-hidden="true">
      <div className="browser__bar">
        <div className="browser__dot" /><div className="browser__dot" /><div className="browser__dot" />
        <div className="browser__url">{url || 'admin.your-restaurant.sa'}</div>
      </div>
      <div className="browser__screen"><Screen /></div>
    </div>
  );
};

/** Renders the right frame for a screen key, or a real image if provided. */
export const Mockup: React.FC<{ screen: string; device: 'phone' | 'browser'; image?: string; alt?: string }> = ({
  screen, device, image, alt,
}) => {
  if (image) {
    return (
      <div className={device === 'phone' ? 'phone' : 'browser'}>
        {device === 'phone' ? (
          <>
            <div className="phone__notch" />
            <div className="phone__screen"><img src={image} alt={alt || ''} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </>
        ) : (
          <>
            <div className="browser__bar"><div className="browser__dot" /><div className="browser__dot" /><div className="browser__dot" /><div className="browser__url">admin.your-restaurant.sa</div></div>
            <div className="browser__screen"><img src={image} alt={alt || ''} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </>
        )}
      </div>
    );
  }
  return device === 'phone' ? <PhoneMock screen={screen} /> : <BrowserMock screen={screen} />;
};
