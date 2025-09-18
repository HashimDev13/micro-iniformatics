import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { NgParticlesModule } from "ng-particles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import counterUp from 'counterup2';
import { RouterLink } from '@angular/router';
// declare var particlesJS: any;
// import counterUp from 'counterup2';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  activeItem: string = 'home';
  isScrolled = false;
  isMobileMenuOpen = false;
  scrolled = false;
  faqs = [
    {
      question: "Can you create a schedule tailored to my needs?",
      answer: "Yes! We understand your specific requirements and create a fully customized schedule or itinerary to ensure a smooth and stress-free journey."
    },
    {
      question: "What does flexibility mean?",
      answer: "At AA Coaches, flexibility means you can easily adjust or reschedule your travel plans without any stress or extra charges. We understand that plans can change, and we're here to accommodate you."
    },
    {
      question: "What if my flight gets delayed?",
      answer: "No worries — if your flight is delayed, we promptly update your travel schedule to make sure your journey with AA Coaches continues smoothly and without disruption."
    },
    {
      question: "Do you offer itineraries for special events or requirements?",
      answer: "Absolutely. Whether it’s a wedding, business meeting, or family celebration — our team crafts a plan to fit your specific occasion."
    },
    {
      question: "Can I plan leisure or tour trips besides daily travel?",
      answer: "Yes! Whether it’s a daily commute or sightseeing — we provide complete plans for leisure, tours, and special experiences as well."
    }
  ];

  ngOnInit(): void {

  }


  ngOnDestroy() {
    window.removeEventListener('scroll', this.checkScroll, true);
  }

  checkScroll = (): void => {
    this.scrolled = window.scrollY > 20;
  };

  services = [
    {
      title: 'Data Analysis',
      icon: 'bi bi-bar-chart-line',
      points: [
        'Publication-ready figures, interactive dashboards, and multi-dimensional visualizations for complex datasets.'
      ]
    },
    {
      title: 'Statistical Analysis',
      icon: 'bi bi-graph-up',
      points: [
        'Hypothesis testing & p-value analysis',
        'Descriptive & inferential statistics',
        'Regression, ANOVA, Chi-square tests'
      ]
    },
    {
      title: 'Prediction Modeling',
      icon: 'bi bi-lightbulb',
      points: [
        'Machine learning model development',
        'Predictive analytics for omics data',
        'Time-series & trend forecasting'
      ]
    },
    {
      title: 'Artificial Intelligence Solutions',
      icon: 'bi bi-cpu',
      points: [
        'NLP for literature mining & semantic search',
        'Custom AI model training',
        'AI-assisted molecular design'
      ]
    },
    {
      title: 'Publications Support',
      icon: 'bi bi-journal-text',
      points: [
        'Figure and table preparation',
        'Statistical results interpretation',
        'Scientific writing & editing'
      ]
    },
    {
      title: 'Bioinformatics & Bioanalysis',
      icon: 'bi bi-bezier',
      points: [
        'Genomic, proteomic, and transcriptomic analysis',
        'Metagenome & antimicrobial resistance studies',
        'Differential gene expression analysis'
      ]
    }
  ];

  ngAfterViewInit(): void {

    const sections = ['home', 'about', 'mission', 'values', 'whyus', 'partners', 'contact', 'expertise'];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeItem = entry.target.id;
            console.log('Active section:', entry.target.id);
          }
        }
      },
      {
        threshold: 0.6, // 60% visible to be considered active
      }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    }
    const counters = document.querySelectorAll('.counter');

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counterUp(entry.target as HTMLElement, {
              duration: 1000,
              delay: 5
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.7 }
    );

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  }

 

  activeFaq: number | null = null;
  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  
}