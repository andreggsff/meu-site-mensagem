export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="bg-slate-800 border border-slate-700 shadow-2xl rounded-2xl p-8 max-w-md text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h1 className="text-2xl font-bold text-white mb-4">Uma mensagem para você</h1>
        <p className="text-slate-300 text-lg leading-relaxed italic">
          "Escrevi este site para dizer que você é muito importante para mim, te amo. 
          Que nossa amizade seja sempre sincera e possamos desfrutar da vida com leveza"
        </p>
        <div className="mt-6 text-xs text-slate-500 font-mono">
          Enviado via Next.js + Vercel
        </div>
      </div>
    </main>
  );
}