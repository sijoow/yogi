// components/TripleChart.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './BrandSection_04.css'; // CSS 하나에 모두 포함

// 플러그인 한 번만 등록
Chart.register(ChartDataLabels);

export default function TripleChart() {
  const barRef   = useRef(null);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);

  const barChartRef   = useRef(null);
  const lineChart1Ref = useRef(null);
  const lineChart2Ref = useRef(null);

  useEffect(() => {
    // 기존 차트 destroy
    barChartRef.current   && barChartRef.current.destroy();
    lineChart1Ref.current && lineChart1Ref.current.destroy();
    lineChart2Ref.current && lineChart2Ref.current.destroy();

    // ─── Bar 차트 (탄성력)
    if (barRef.current) {
      barChartRef.current = new Chart(barRef.current, {
        type: 'bar',
        data: {
          labels: [''],
          datasets: [
            { label: 'EPS', data: [35.0], backgroundColor: '#192A44', borderWidth: 1 },
            { label: 'EPP', data: [39.6], backgroundColor: '#66CCFF', borderWidth: 1 },
            { label: 'HRF', data: [45.5], backgroundColor: '#2C80ED', borderWidth: 1 }
          ]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true, min: 0, max: 50 } },
          plugins: {
            datalabels: { display: true },
            tooltip:   { enabled: false }
          }
        }
      });
    }            
    // ─── Line 차트 1 (압축강도)
    if (lineRef1.current) {
      lineChart1Ref.current = new Chart(lineRef1.current, {
        type: 'line',
        data: {
          labels: ["0%", "10%", "25%", "50%", "75%", ""],
          datasets: [
            { label: 'EPP', data: [null,10,25,49,90], borderColor: '#192A44', tension: .1, borderWidth: 5 },
            { label: 'EPS', data: [null,8,23,49,65],   borderColor: '#66CCFF', tension: .1, borderWidth: 5 },
            { label: 'HRF', data: [null,10,15,35,55], borderColor: '#2C80ED', tension: .1, borderWidth: 5 }
          ]
        },
        options: {
          scales: {
            x: { type: 'category', position: 'bottom' },
            y: { beginAtZero: false, suggestedMin: 0, suggestedMax: 100, ticks: { display: false } }
          },
          plugins: {
            datalabels: { display: true },
            tooltip:    { enabled: false }
          }
        }
      });
    }

    // ─── Line 차트 2 (복원력)
    if (lineRef2.current) {
      lineChart2Ref.current = new Chart(lineRef2.current, {
        type: 'line',
        data: {
          labels: ["", "", "", "", "", ""],
          datasets: [
            { label: 'EPP', data: [null,0,10,20,35,50], borderColor: '#192A44', tension:.1, borderWidth:5, pointRadius:0 },
            { label: 'EPS', data: [null,0,11,16,21,26],   borderColor: '#66CCFF', tension:.1, borderWidth:5, pointRadius:0 },
            { label: 'HRF', data: [null,3,30,40,55,60],   borderColor: '#2C80ED', tension:.1, borderWidth:5, pointRadius:0 },
            { label: '',    data: [null,0,10,20,30,45],   borderColor: '#7f7f7f', borderDash:[5,5], borderWidth:1, pointRadius:0 },
            { label: '',    data: [null,0,10,15,20,25],   borderColor: '#2b7a4a', borderDash:[5,5], borderWidth:1, pointRadius:0 },
            { label: '',    data: [null,0,10,30,50,70],   borderColor: '#b93f4a', borderDash:[5,5], borderWidth:1, pointRadius:0 }
          ]
        },
        options: {
          scales: {
            x: { type: 'category', position: 'bottom', ticks: { display: true } },
            y: {
              beginAtZero: false,
              suggestedMin: 0,
              suggestedMax: 70,
              position: 'right',
              ticks: {
                display: true,
                callback: (v,i) => ["", "", "35%", "", "70%", "", "80%"][i] || ''
              }
            }
          },
          plugins: {
            datalabels: { display: true },
            tooltip:    { enabled: false }
          }
        }
      });
    }

    return () => {
      barChartRef.current   && barChartRef.current.destroy();
      lineChart1Ref.current && lineChart1Ref.current.destroy();
      lineChart2Ref.current && lineChart2Ref.current.destroy();
    };
  }, []);

  return (
    <section className="BrandSection_04">
      <h2 className="excl-title">Exclusivity – The Super Beads</h2>
      <p className="excl-intro">
        Yogi Corporation has carried out extensive trials and R&amp;D over the past five years,
        leading to the successful co‑development of HRF (High Resilience Foam), a specialized
        filling material for beanbag sofas, in partnership with LOTTE Chemical. Commercialized
        on March 1, 2023, HRF addresses the limitations of conventional EPS (Expanded Polystyrene)
        and EPP (Expanded Polypropylene), which are widely used in beanbags both in Korea and
        globally. It delivers superior performance in terms of both technology and cost‑
        efficiency. Additionally, HRF is an antibacterial bead that inhibits the growth of harmful
        bacteria such as Staphylococcus aureus and E. coli by 99.9%, providing a timely solution
        to increased concerns over pathogens in the post‑COVID‑19 era.
      </p>

      <div className="triple-chart">
        <div className="chart-block">
          <h4>Compressive Strength</h4>
          <canvas ref={lineRef1} />
          <p>Lower compressive strength means<br/>improvement of seating comfort.</p>
        </div>
        <div className="chart-block">
          <h4>Resilience</h4>
          <canvas ref={lineRef2} />
          <p>Higher resilience means better durability<br/>and less frequent refills.</p>
        </div>
        <div className="chart-block">
          <h4>Elasticity</h4>
          <canvas ref={barRef} />
          <p>Greater elasticity keeps its shape<br/>to fit any body.</p>
        </div>
      </div>
    </section>
  );
}
