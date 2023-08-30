export default function handler(req, res) {
  const data = {
    success: true,
    data: [
      {
        id: 1,
        details: 'Sit et fuga exercitationem dolorum mollitia similique et.',
        amount: '66997',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 8,
          account_number: '4595564244',
          account_name: 'maiores',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Nemo autem dolor facere quas nam quo quas.',
        amount: '926859',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 36,
          account_number: '9152121267',
          account_name: 'facilis',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Omnis accusantium atque maxime ut facere totam.',
        amount: '625472',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 36,
          account_number: '2138231836',
          account_name: 'mollitia',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Accusamus cumque ea quis.',
        amount: '48060',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 44,
          account_number: '5751340485',
          account_name: 'quia',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Aut incidunt qui vitae.',
        amount: '432659',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 44,
          account_number: '3025294698',
          account_name: 'officia',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 2,
        details: 'Quas consequuntur maiores perferendis.',
        amount: '880701',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 6,
          account_number: '6906429752',
          account_name: 'numquam',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 2,
          name: 'UNAUTHORIZED DEBIT',
        },
      },
      {
        id: 2,
        details: 'Autem neque et totam blanditiis doloribus.',
        amount: '404834',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 17,
          account_number: '7231958206',
          account_name: 'veritatis',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 2,
          name: 'UNAUTHORIZED DEBIT',
        },
      },
      {
        id: 2,
        details:
          'Facilis sequi omnis omnis eos maiores inventore quia occaecati.',
        amount: '614459',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 5,
          account_number: '9936837509',
          account_name: 'vel',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 2,
          name: 'UNAUTHORIZED DEBIT',
        },
      },
      {
        id: 4,
        details: 'Voluptate similique saepe temporibus molestiae quis.',
        amount: '106942',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 35,
          account_number: '3467623972',
          account_name: 'deserunt',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 4,
          name: 'UNAUTHORIZED TRANSFER',
        },
      },
      {
        id: 4,
        details: 'Qui similique occaecati blanditiis illum iusto.',
        amount: '796693',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 14,
          account_number: '094008497X',
          account_name: 'debitis',
        },
        user: {
          user_id: 5,
          first_name: 'Mark',
          last_name: 'Twain',
          email: 'marktwain@gmail.com',
          phone: '08126064531',
        },
        transaction: {
          transaction_type_id: 4,
          name: 'UNAUTHORIZED TRANSFER',
        },
      },
      {
        id: 1,
        details: 'Ab quibusdam quam vel ut sapiente et et.',
        amount: '404448',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 48,
          account_number: '2079686879',
          account_name: 'ut',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Vitae saepe sit magnam.',
        amount: '645493',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 17,
          account_number: '6315544908',
          account_name: 'voluptatem',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Officiis aliquam praesentium fugit at.',
        amount: '258758',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 48,
          account_number: '0176872833',
          account_name: 'et',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Et aut et sunt ut quo.',
        amount: '585327',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 5,
          account_number: '8262932900',
          account_name: 'temporibus',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'In aspernatur qui natus ex nobis neque laboriosam.',
        amount: '955054',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 37,
          account_number: '3764225068',
          account_name: 'qui',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 1,
        details: 'Recieveing multiple debit alerts',
        amount: '549,000',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 10,
          account_number: '0042786541',
          account_name: 'Dr Ray',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 1,
          name: 'ATM FRAUD',
        },
      },
      {
        id: 2,
        details: 'Et necessitatibus in excepturi id molestiae.',
        amount: '272339',
        incident: {
          incident_status_id: 17,
          name: 'Assigned to bank:fraud desk',
        },
        bank: {
          bank_id: 48,
          account_number: '1221281674',
          account_name: 'qui',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 2,
          name: 'UNAUTHORIZED DEBIT',
        },
      },
      {
        id: 2,
        details: 'I was robbed by Finn',
        amount: '2,000,00',
        incident: {
          incident_status_id: 15,
          name: 'Incident Closed',
        },
        bank: {
          bank_id: 10,
          account_number: '00908786544',
          account_name: 'Joe Biden',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 2,
          name: 'UNAUTHORIZED DEBIT',
        },
      },
      {
        id: 3,
        details: 'Iste sed aliquid voluptatum aut ducimus et deleniti.',
        amount: '444561',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 7,
          account_number: '7013109584',
          account_name: 'soluta',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 3,
          name: 'FRAUD',
        },
      },
      {
        id: 3,
        details: 'Consequatur reiciendis autem sint molestiae sequi voluptate.',
        amount: '906100',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 45,
          account_number: '4679799188',
          account_name: 'quod',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 3,
          name: 'FRAUD',
        },
      },
      {
        id: 3,
        details: 'Ut adipisci aliquid maxime voluptas nihil quos non non.',
        amount: '166897',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 19,
          account_number: '3968264444',
          account_name: 'qui',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 3,
          name: 'FRAUD',
        },
      },
      {
        id: 3,
        details: 'Dolores sint facere voluptas deleniti ut ut quis.',
        amount: '311010',
        incident: {
          incident_status_id: 1,
          name: 'Under Investigation',
        },
        bank: {
          bank_id: 14,
          account_number: '114987015X',
          account_name: 'dolorem',
        },
        user: {
          user_id: 6,
          first_name: 'Joe',
          last_name: 'Biden',
          email: 'joebiden@gmail.com',
          phone: '08126064532',
        },
        transaction: {
          transaction_type_id: 3,
          name: 'FRAUD',
        },
      },
    ],
    message: 'Incidents retrieved successfully',
    status: 200,
  };
  res.status(200).json({ data });
}
