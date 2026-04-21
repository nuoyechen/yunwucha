/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Origin from "./components/Origin";
import Craft from "./components/Craft";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-tea-green selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Origin />
        <Craft />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
