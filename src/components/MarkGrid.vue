<template>
  <v-data-table
    :headers="headers"
    :items="tasks"
  >
    <template slot="items" slot-scope="props">
      <td>
        <v-edit-dialog
          :return-value.sync="props.item.name"
          lazy
        > {{ props.item.name }}
          <v-text-field
            slot="input"
            v-model="props.item.name"
            :rules="[max25chars]"
            label="Edit"
            single-line
            counter
          ></v-text-field>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">
        <v-edit-dialog
          :return-value.sync="props.item.iron"
          large
          lazy
          persistent
        >
          <div>{{ props.item.iron }}</div>
          <div slot="input" class="mt-3 title">Update Iron</div>
          <v-text-field
            slot="input"
            v-model="props.item.iron"
            :rules="[max25chars]"
            label="Edit"
            single-line
            counter
            autofocus
          ></v-text-field>
        </v-edit-dialog>
      </td>
    </template>
    <template slot="pageText" slot-scope="{ pageStart, pageStop }">
      From {{ pageStart }} to {{ pageStop }}
    </template>
  </v-data-table>
</template>


<script>
  export default {
    name: 'MarkGrid',
    data () {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        pagination: {},
        headers: [
          {
            text: 'Students',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {text: 'Test Class Task', value: 'task1'},
          {text: 'Case Study', value: 'case-study'},
          {text: 'History, Science and Archeology', value: 'HSA'},
          {text: 'Historical Investigation', value: 'historical-investigation'},
          {text: 'Yearly Exam', value: 'yearly-exam'}
        ],
        tasks: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    }
  }
</script>