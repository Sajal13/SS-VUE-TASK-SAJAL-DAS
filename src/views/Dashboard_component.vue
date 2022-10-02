<template>
   <div>
        <v-row>
            <v-col lg="4" cols="12" v-for="item in activityLog" :key="item.id">
                <v-card elevation="2" class="rounded-small" :color="item.background">
                    <v-card-text class="card-inner">
                        <div>
                            <strong>{{item.title}}</strong> <br>
                        </div>
                        <v-avatar size="70" :color="item.color" class="items">
                            <span>{{item.amount}} </span>
                        </v-avatar>
                </v-card-text>
                    </v-card>
            </v-col>
        </v-row>
       <br />
       <br/>
        <v-row class="headings">
            <v-col lg="4" col="12">
                <h3>Our growth</h3>
                <canvas id="growthChart" width="400" height="400"></canvas>
            </v-col>
            <v-col lg="4" col="12">
                <h3>Projects done</h3>
                <canvas id="projectChart" width="300" height="300" />
            </v-col>
            <v-col lg="4" col="12">
                <h3>Employees</h3>
                <canvas id="employeeChart" width="300" height="300" />
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import Chart from 'chart.js/auto';
    export default({
        name: 'Dashboard_component',
        data(){
            return {
                activityLog: [
                    {   id:"1",
                        title: 'Total Employees', 
                        amount: 35, 
                        icon: 'mdi-account', 
                        color: 'cyan lighten-3',
                        background: '#82B1FF'
                    },
                    {   id:"2",
                        title: 'New Employees', 
                        amount: 10, 
                        icon: 'mdi-account-group-outline', 
                        color: 'green darken-2',
                        background: '#CE93D8'
                    },
                    {   id:"3",
                        title: 'Employees Rating & Reviews', 
                        amount: '6.5/10', 
                        icon: 'mdi-account-group-outline', 
                        color: 'blue-grey darken-1',
                        background: '#80CBC4'
                    }
                ],
            }
        },
        mounted() {
            const growth = document.getElementById('growthChart');
            const project = document.getElementById('projectChart');
            const employees = document.getElementById("employeeChart");
            const growthChart = new Chart(growth, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label:['Growth'],
                    data: [20, 40, 60, 55, 70, 100],
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)'
                    ]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const projectChart = new Chart(project,{
            type: 'doughnut',
            data: {
                labels: [
                    'Govermental',
                    'Non-goverment',
                ],
                datasets: [{
                    label: 'Projects',
                    data: [20, 30],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    ],
                    hoverOffset: 4
                }]
            }
        })
        const employeeChart = new Chart(employees,{
            type: 'line',
            data:{
            labels: ['2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Employees',
                data: [9, 15, 12, 25 , 35, 100],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
            }
        })
    
        growthChart;
        projectChart;
        employeeChart;
    },
})
</script>
<style>
    .headings h3{
        text-align: center;
        margin-bottom: 10px;
    }
   
    .cards{
        width: 350px;
        
    }
    .card-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .items{
        border: 3px solid #444;
        background: white;
    }
</style>