<script setup>


</script>

<template>
    <div class="head">
        <h1>Dashboard</h1>
    </div>
    <div class="content">
        <v-row class="align-center justify-center" density="comfortable">
            <v-card color="secondary" width="350" class="mx-auto">
                <v-card-text class="btnicon">
                    <h2> Total Employees <v-tab></v-tab> <v-icon size="28">
                            mdi-account-group
                        </v-icon> </h2>

                    <h1> 2,300 </h1>

                    <v-btn variant="text"> See more </v-btn>
                </v-card-text>
            </v-card>

            <v-card color="error" width="350" class="mx-auto">
                <v-card-text class="btnicon">
                    <h2> Leave Request <v-tab></v-tab> <v-icon size="28">
                            mdi-account-file-text
                        </v-icon> </h2>

                    <h1> 3 Pending </h1>

                    <v-btn variant="text"> See more </v-btn>
                </v-card-text>
            </v-card>

            <v-card color="primary" width="350" class="mx-auto">
                <v-card-text class="btnicon">
                    <h2> Processed Payroll <v-tab></v-tab> <i class="mdi mdi-application-edit"></i> </h2>

                    <h1> Lorem Ipsum </h1>

                    <v-btn variant="text"> See more </v-btn>
                </v-card-text>
            </v-card>

            <v-card color="primary" width="350" class="mx-auto">
                <v-card-text class="btnicon">
                    <h2> HR Reports <v-tab></v-tab> <v-icon size="28">
                            mdi-account-supervisor
                        </v-icon> </h2>

                    <h1> Lorem Ipsum </h1>

                    <v-btn variant="text"> See more </v-btn>
                </v-card-text>
            </v-card>

        </v-row>
    </div>
    <div class="content">
        <v-row class="align-center justify-center" density="comfortable">
            <v-card class="sumcard">
                <div class="title">
                    <h1> Payroll Summary </h1>
                    <v-btn prepend-icon="mdi-account" size="x-large" variant="text">
                    </v-btn>
                    <v-card-text>Clyde Company has <h1> 5,000 </h1> total Employees</v-card-text>
                </div>
            </v-card>

            <v-row>
                <v-col>
                    <v-card class="recentcard">
                        <div class="title">
                            <h1> Recent Activities </h1>

                            <v-btn prepend-icon="mdi-account" size="x-large" variant="text">
                            </v-btn>
                            <v-card-text>Clyde Company has <h1> 5,000 </h1> total Employees</v-card-text>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </div>

</template>

<style>
.head {
    margin-left: 15%;
}

.content {
    margin-top: 5%;
    margin-left: 15%;
}

.sumcard {
    width: min(850px, 90%);
    height: 50dvh;
    margin-left: 1%;
}

.recentcard {
    width: min(650px, 90%);
    height: 50dvh;
    margin-left: 7%;
}

.title {
    margin-left: 5%;
}

.btnicon {
    margin-left: 20px;
}
</style>