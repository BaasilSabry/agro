export function CompanyOverview() {
  return (
    <section
      className="py-20 bg-white relative"
      style={{
      backgroundImage: 'url(/CORWNFILEDARGO.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '800px',
      minHeight: '400px',
      }}
    >
      {/* Overlay for background image opacity */}
      <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,255,255,0.9)', 
        pointerEvents: 'none',
      }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-evergreen-dark mb-8 animate-fade-in">About CROWNFIELD</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 animate-fade-in">
        Founded in 2025, CROWNFIELD is a pioneering sustainable agriculture startup based in Sri Lanka. We are
        dedicated to transforming the agricultural landscape by connecting local farmers with global markets while
        maintaining our commitment to environmental sustainability and community empowerment.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
        Our journey began with a simple yet powerful vision: to create a bridge between traditional Sri Lankan
        farming practices and modern sustainable agriculture techniques. Today, we stand as a trusted partner for
        farmers, exporters, and agricultural equipment suppliers across the region.
        </p>
      </div>
      </div>
    </section>
  )
}
