<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const empAccordion = ref(false);
const departAccordion = ref(false);
const payrollAccordion = ref(false);
const timeAccordion = ref(false);

const drawer = ref(true)



</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent width="260" color="indigo">
      <div class="sidebar-content">
        <h2>PAYROLL SYSTEM</h2>
        <div class="logo">

          <router-link to="/dash">
            <v-btn prepend-icon="mdi-view-dashboard" class="dash" size="x-large" variant="text" color="white">
              DASHBOARD
            </v-btn>
          </router-link>
        </div>
        <v-list nav bg-color="transparent" class="navigation-list">
          <div>
            <v-card-actions>
              <v-btn prepend-icon="mdi-account-multiple" @click="empAccordion = !empAccordion" class="mainbtn"
                size="x-large">
                Employees
              </v-btn>
            </v-card-actions>
          </div>

          <v-expand-transition>
            <div v-show="empAccordion">
              <v-row>
                <v-col>
                  <RouterLink to="/emps">
                    <v-btn color="white" prepend-icon="mdi-account-group" class="contbtn" variant="text">
                      Employee List
                    </v-btn>
                  </RouterLink>
                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <RouterLink to="/addemps">
                    <v-btn color="white" prepend-icon="mdi-account-plus" class="contbtn" variant="text">
                      Add Employee
                    </v-btn>
                  </RouterLink>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <RouterLink to="/department">
                    <v-btn color="white" prepend-icon="mdi-bank" class="contbtn" variant="text">
                      Department
                    </v-btn>
                  </RouterLink>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <RouterLink to="/positions">
                    <v-btn color="white" prepend-icon="mdi-application-cog-outline" class="contbtn" variant="text">
                      Positions
                    </v-btn>
                  </RouterLink>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <RouterLink to="/empstat">
                    <v-btn color="white" prepend-icon="mdi-account-search" class="contbtn" variant="text">
                      Employment Status
                    </v-btn>
                  </RouterLink>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>

          <div>
            <v-card-actions>
              <v-btn prepend-icon="mdi-calendar-text" @click="departAccordion = !departAccordion" class="mainbtn"
                size="x-large">
                Attendance
              </v-btn>
            </v-card-actions>
          </div>

          <v-expand-transition>
            <div v-show="departAccordion">
              <v-row>
                <v-col>
                  <v-btn prepend-icon="mdi-calendar-check" class="contbtn" variant="text">
                    Attendance Logs
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-account-arrow-right" class="contbtn" variant="text">
                    Leave Request
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-timer-edit" class="contbtn" variant="text">
                    Overtime Request
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-calendar-remove" class="contbtn" variant="text">
                    Holidays
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>

          <div>
            <v-card-actions>
              <v-btn prepend-icon="mdi-cash-register" class="mainbtn" @click="payrollAccordion = !payrollAccordion"
                size="x-large">
                Payroll
              </v-btn>
            </v-card-actions>
          </div>

          <v-expand-transition>
            <div v-show="payrollAccordion">
              <v-row>
                <v-col>
                  <v-btn prepend-icon="mdi-cash-edit" class="contbtn" variant="text">
                    Process Payroll
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-cash-clock" class="contbtn" variant="text">
                    Payroll History
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-credit-card-outline" class="contbtn" variant="text">
                    Payslip
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>

                  <v-btn prepend-icon="mdi-network-pos" class="contbtn" variant="text">
                    Payroll Calendar
                  </v-btn>

                  <v-divider color="white" class="border-opacity-50" gradient> </v-divider>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>
        </v-list>
      </div>
    </v-navigation-drawer>
    <main>
      <RouterView />
    </main>
  </v-app>
</template>

<style>
.title {
  margin-top: 20px;
  margin-left: 20%;
}

.icon {
  margin-top: 10%;
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 28px 12px 8px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 30px 25px;
  font-size: 20px;
  font-weight: 500;
}

.navigation-list {
  padding: 0 8px;
}

.navigation-list :deep(.v-list-item) {
  margin-bottom: 8px;
  border-radius: 8px;
  min-height: 48px;
}

.navigation-list :deep(.v-list-item:hover) {
  background: rgba(255, 255, 255, 0.12);
}

.mainbtn {
  margin-left: 15%;
}

.contbtn {
  margin-left: 20%;
  margin-top: 5%;
}
</style>