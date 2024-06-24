import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <section
      className={`bg-white max-w-full flex flex-row items-start justify-start py-7 px-[82px] box-border text-center text-base text-gray font-plus-jakarta-sans mq350small:flex-col ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-[256px]">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-row items-end justify-center gap-[12px]">
            <img
              className="w-8 relative h-[35px]"
              alt=""
              src="/fictional-company-logo.svg"
            />
            <img className="w-28 relative h-7" alt="" src="/financy.svg" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[32px]">
          <div className="relative tracking-[0.02em] font-medium">Home</div>
          <div className="relative tracking-[0.02em] font-medium">About</div>
          <div className="relative tracking-[0.02em] font-medium">Pricing</div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative tracking-[0.02em] font-medium">
              Customers
            </div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconamoonarrowup2light.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-royalblue">
          <div className="rounded-lg flex flex-row items-center justify-center py-4 px-8 border-[1.2px] border-solid border-lightgray">
            <div className="relative tracking-[0.02em] font-medium">Login</div>
          </div>
          <div className="rounded-lg bg-royalblue flex flex-row items-center justify-center py-4 px-8 text-white">
            <div className="relative tracking-[0.02em] font-medium">
              Register
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
