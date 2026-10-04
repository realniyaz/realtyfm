"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Phone, ExternalLink, Sparkles } from "lucide-react";
import { generateBotResponse, BotResponse } from "@/lib/botEngine";
import { COMPANY_DATA } from "@/data/company";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: BotResponse["suggestedActions"];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    sender: "bot",
    text: "Welcome to Realty FM. I am your private advisory assistant. How may I assist your property investment goals today?",
    timestamp: "Just now",
    actions: [
      { label: "Browse Top Projects", action: "show me projects" },
      { label: "Office Coordinates", action: "where are your offices?" },
      { label: "Direct WhatsApp", action: COMPANY_DATA.primaryContact.whatsappLink },
    ],
  },
];

export default function RealtyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText) return;

    // Check if the action is an external or route link
    if (userText.startsWith("http") || userText.startsWith("tel:") || userText.startsWith("/")) {
      window.open(userText, userText.startsWith("http") ? "_blank" : "_self");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Simulate luxury response timing
    setTimeout(() => {
      const response = generateBotResponse(userText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: response.suggestedActions,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* 1. FLOATING ACTION TRIGGER (BOTTOM-RIGHT) */}
      <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Realty FM Assistant"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#14171A] border-2 border-[#B89246] shadow-[0_8px_30px_rgba(184,146,70,0.35)] flex items-center justify-center p-1.5 focus:outline-none overflow-hidden group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#FAF8F5] transition-transform duration-300" />
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/icon.jpeg"
                alt="Realty FM Advisor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Subtle Online Gold Dot */}
          {!isOpen && (
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#25D366] border-2 border-[#14171A] rounded-full" />
          )}
        </motion.button>
      </div>

      {/* 2. CHATBOT DIALOG DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-22 sm:bottom-26 right-4 sm:right-7 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[550px] max-h-[78vh] rounded-3xl bg-[#FAF8F5] border border-[#B89246]/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden text-[#1A1815]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#14171A] text-[#FAF8F5] border-b border-[#B89246]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#B89246]/60">
                  <Image src="/icon.jpeg" alt="Realty FM" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold text-white flex items-center gap-1.5 leading-none">
                    <span>Realty FM Advisory</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
                  </h3>
                  <span className="text-[10px] text-[#D8CFBC] font-sans flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    Online • Institutional Intelligence
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-[#14171A] text-[#FAF8F5] rounded-tr-xs shadow-sm"
                        : "bg-white text-[#1A1815] border border-[#E8DFD1] shadow-sm rounded-tl-xs"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Timestamp */}
                  <span className="text-[9px] text-neutral-400 mt-1 px-1">{msg.timestamp}</span>

                  {/* Action Suggestion Pills */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                      {msg.actions.map((act) => (
                        <button
                          key={act.label}
                          onClick={() => handleSend(act.action)}
                          className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#F5EFEB] hover:bg-[#B89246] hover:text-black border border-[#B89246]/40 text-[#865F27] transition-all flex items-center gap-1"
                        >
                          <span>{act.label}</span>
                          {act.action.startsWith("http") && <ExternalLink className="w-2.5 h-2.5" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-[#E8DFD1] px-3.5 py-2 rounded-2xl w-max">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89246] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89246] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89246] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-[#E8DFD1]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Gaur, ACE, offices, sizes..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs text-[#1A1815] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-[#FAF8F5] hover:text-[#0C0D0E] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}