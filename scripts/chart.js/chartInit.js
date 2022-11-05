const firstCanvas = document.getElementById("firstChart");
const firstChart = new Chart(firstCanvas, {
  type: "bar",
  data: {
    labels: [
      "Архангельск",
      "Анапа",
      "Екатеринбург",
      "Астрахань",
      "Санкт-Петербург",
      "Москва",
    ],
    datasets: [
      {
        label: "Средняя зарплата бухгалтера (₽)",
        data: [15000, 16000, 25000, 30000, 40000, 45000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
    },
    layout: {
      padding: 10,
    },
  },
  plugins: [
    {
      id: "custom_canvas_background_color",
      beforeDraw: (myChart) => {
        const { ctx } = myChart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#303030";
        ctx.fillRect(0, 0, myChart.width, myChart.height);
        ctx.restore();
      },
    },
  ],
});

const secondCanvas = document.getElementById("secondChart");
const secondChart = new Chart(secondCanvas, {
  type: "bar",
  data: {
    labels: [
      "Главный бухгалтер",
      "Старший бухгалтер",
      "Бухгалтер",
      "Младший бухгалтер",
      "Бухгалтер стажер",
    ],
    datasets: [
      {
        label: "Средняя зарплата бухгалтеров по наименованию вакансий (₽)",
        data: [45510, 32746, 32276, 32148, 17746],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 18,
          },
        },
      },
    },
    layout: {
      padding: 10,
    },
  },
  plugins: [
    {
      id: "custom_canvas_background_color",
      beforeDraw: (myChart) => {
        const { ctx } = myChart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "#202020";
        ctx.fillRect(0, 0, myChart.width, myChart.height);
        ctx.restore();
      },
    },
  ],
});
