import { useState } from 'react';
import { db } from '../firebase/firebaseConfig'; // Alinhe com a sua instância do Firebase
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function LeadForm() {
  const [formData, setFormData] = useState({ nome: '', whatsapp: '', veiculo: '', servico: '', mensagem: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        status: "Novo",
        criadoEm: serverTimestamp()
      });
      setSent(true);
      setFormData({ nome: '', whatsapp: '', veiculo: '', servico: '', mensagem: '' });
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      alert("Ocorreu um erro. Por favor, tente novamente.");
    }
    setLoading(false);
  };

  return (
    <section id="agendamento" className="py-20 bg-matrix-card text-white px-6 border-t border-gray-900">
      <div className="container mx-auto max-w-xl bg-matrix-bg p-8 rounded-xl border border-matrix-green/20 shadow-glow">
        <h2 className="text-2xl font-bold mb-2 text-center text-matrix-green">AGENDAR SERVIÇO</h2>
        <p className="text-gray-400 text-sm text-center mb-8">Deixe seus dados e nossa equipe técnica entrará em contato.</p>

        {sent ? (
          <div className="text-center p-6 border border-matrix-green/50 rounded bg-matrix-green/10">
            <p className="text-matrix-green font-bold text-lg mb-2">Solicitação Enviada!</p>
            <p className="text-gray-300 text-sm">Entraremos em contato via WhatsApp em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Nome Completo</label>
              <input required type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} className="w-full bg-matrix-card border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-matrix-green" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">WhatsApp</label>
                <input required type="tel" placeholder="(21) 99999-0000" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-matrix-card border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-matrix-green" />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Modelo do Veículo</label>
                <input required type="text" placeholder="Ex: HB20, BMW 320i" value={formData.veiculo} onChange={e => setFormData({...formData, veiculo: e.target.value})} className="w-full bg-matrix-card border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-matrix-green" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Serviço Pretendido</label>
              <select value={formData.servico} onChange={e => setFormData({...formData, servico: e.target.value})} className="w-full bg-matrix-card border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-matrix-green">
                <option value="">Selecione um serviço</option>
                <option value="Reparo de Módulos">Reparo de Módulos Eletrônicos</option>
                <option value="Diagnóstico Avançado">Diagnóstico Avançado</option>
                <option value="Câmbio Automático">Manutenção de Câmbio Automático</option>
                <option value="Outros">Outros Serviços</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1">Mensagem/Sintomas (Opcional)</label>
              <textarea rows="3" value={formData.mensagem} onChange={e => setFormData({...formData, mensagem: e.target.value})} className="w-full bg-matrix-card border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-matrix-green"></textarea>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-matrix-green text-black font-bold p-4 rounded hover:bg-white transition-colors duration-300 shadow-glow disabled:opacity-50">
              {loading ? "Processando..." : "SOLICITAR AGENDAMENTO"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}