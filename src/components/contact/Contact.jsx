import { useState } from 'react';
import Button from '../../layouts/button/Button';

const Contact = () => {
    const [formData, setFormData] = useState({ fname: '', lname: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ show: false, text: '', isError: false });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fname || !formData.email || !formData.message) {
            setStatus({ show: true, text: 'Please fill in all required fields.', isError: true });
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setStatus({ show: true, text: '✓ Message sent! Muneeb will get back to you soon.', isError: false });
            setFormData({ fname: '', lname: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus({ show: false, text: '', isError: false }), 5000);
        }, 1400);
    };

    return (
        <section id="contact" className="w-full bg-bg2 border-t border-border1 relative z-10">
            <div className="max-w-[1200px] mx-auto py-20 md:py-32 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent">Let&apos;s connect</div>
                    <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-textMain mb-4">Get In Touch</h2>
                    <p className="text-text2 text-[1.05rem] leading-relaxed">Available for full-time roles, freelance projects, and exciting collaborations. Let&apos;s build something great together.</p>

                    <div className="flex flex-col gap-5 mt-8">
                        {[
                            { icon: '📧', label: 'Email', val: 'muneebhaider564@gmail.com', href: 'mailto:muneebhaider564@gmail.com' },
                            { icon: '📱', label: 'WhatsApp', val: '+92 301 111 6259', href: 'https://wa.me/923011116259' },
                            { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/muneeb-haider', href: 'https://linkedin.com/in/muneeb-haider/' },
                            { icon: '🐙', label: 'GitHub', val: 'github.com/Muneebqureshi90', href: 'https://github.com/Muneebqureshi90' },
                        ].map((contact, i) => (
                            <a key={i} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-surface border border-border1 rounded-[10px] text-textMain transition-all duration-300 hover:border-accent hover:bg-accent/12 hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded-[10px] bg-accent/12 flex items-center justify-center text-[1.1rem] shrink-0">{contact.icon}</div>
                                <div>
                                    <div className="text-[0.75rem] text-text3 uppercase tracking-widest font-semibold mb-[2px]">{contact.label}</div>
                                    <div className="text-[0.9rem] font-medium">{contact.val}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-widest uppercase text-accent mb-5 before:content-[''] before:block before:w-6 before:h-[1.5px] before:bg-accent lg:mt-0 mt-8">Send a message</div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.82rem] text-text2 font-medium tracking-wide">First Name</label>
                                <input type="text" className="bg-surface border border-border1 rounded-[10px] p-3 text-textMain text-[0.9rem] focus:border-accent focus:bg-surface2 outline-none transition-colors" placeholder="John" value={formData.fname} onChange={(e) => setFormData({...formData, fname: e.target.value})} required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.82rem] text-text2 font-medium tracking-wide">Last Name</label>
                                <input type="text" className="bg-surface border border-border1 rounded-[10px] p-3 text-textMain text-[0.9rem] focus:border-accent focus:bg-surface2 outline-none transition-colors" placeholder="Doe" value={formData.lname} onChange={(e) => setFormData({...formData, lname: e.target.value})} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[0.82rem] text-text2 font-medium tracking-wide">Email Address</label>
                            <input type="email" className="bg-surface border border-border1 rounded-[10px] p-3 text-textMain text-[0.9rem] focus:border-accent focus:bg-surface2 outline-none transition-colors" placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[0.82rem] text-text2 font-medium tracking-wide">Subject</label>
                            <input type="text" className="bg-surface border border-border1 rounded-[10px] p-3 text-textMain text-[0.9rem] focus:border-accent focus:bg-surface2 outline-none transition-colors" placeholder="Project inquiry / Job opportunity" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[0.82rem] text-text2 font-medium tracking-wide">Message</label>
                            <textarea className="bg-surface border border-border1 rounded-[10px] p-3 text-textMain text-[0.9rem] focus:border-accent focus:bg-surface2 outline-none transition-colors min-h-[130px] resize-none" placeholder="Tell me about your project, requirements, or opportunity…" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                        </div>

                        <Button type="submit" className="mt-2" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending…' : 'Send Message →'}
                        </Button>

                        {status.show && (
                            <div className={`text-[0.85rem] text-center p-2 rounded-lg border ${status.isError ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-green/10 text-green-400 border-green/20'}`}>
                                {status.text}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;